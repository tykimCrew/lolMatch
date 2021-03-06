import { connect } from 'react-redux';
import MembersHeader  from '../components/MembersHeader';
import { posiKorJson, posiEngJson, tierKorJson, tierEngJson, pattern_kor } from '../script/PositionTierData';
import $ from 'jquery';

function refresh(dispatch) {
    var boardUrl = document.querySelector('#boardUrl').value;
    
    var urlArr = boardUrl.split('/');
  
    /**
     * 넘어온 방송국URL에대한 최소한의 데이터 검증. NULL체크는 호출하는 mapDispatchToProps 쪽에서 체크
     */
    if (urlArr.length !== 6 || !urlArr[3] || !urlArr[5]) return;
  
    /**
     * apiUrl = "https://bjapi.afreecatv.com/api/khm11903/title/65714065/comment?page=1&orderby=like_cnt";
     * 실제 api가 날라가는형식이 위와같으므로 나도 맞춰서 api를 쏴준다
     * urlArr[3] = user_id
     * urlArr[5] = 방송국게시판 순번
     */
    var url = '';
    var targetPageArr = [1, 2, 3];
    /**
     * 덧글리스트 API 시작
     */
    var filterdCmtList = [];
    var result = []; //최종 memberList 담을 변수 선언
  
    /**
     * 3페이지 리스트 가져온다.
     */
    for (var i in targetPageArr) {
      url = 'https://bjapi.afreecatv.com/api/' + urlArr[3] + '/title/' + urlArr[5] + '/comment?page=' + i + '&orderby=like_cnt';
      $.ajax({
        url: url,
        context: this, //context : this => .done()에서 this를 사용하기위해
        async: false
      }).done(json => {
        /**
         * 댓글을 중복으로달았을시 중복제거
         */
        json.data.forEach((item) => {
          if (!filterdCmtList.find(cmt => cmt.user_id === item.user_id)) {
            filterdCmtList.push(item);
          }
        });
      });
    }
  
    /**
         * 가져온 JSON데이터로 내가원하는데이터만 뽑기.
         */
    filterdCmtList.forEach((item) => {
  
      /**
       * item.comment  = "원딜,서폿/골드4"
       */
      var commentDataArr = item.comment.split('/');
      var posiResult = [];
      var tierResult = '';
  
      if (commentDataArr && commentDataArr.length >= 2) {
        /**
             * 덧글로 입력한 포지션을 분석해서 코드에필요한 포지션데이터로 가공
             * ../script/PositionTierData 에 정의
             */
        var myPositions = commentDataArr[0].split(',');
  
        myPositions.forEach((myPosition) => {
          var posiJson = pattern_kor.test(myPosition) ? posiKorJson : posiEngJson;
          var resultKey = '';
  
          Object.getOwnPropertyNames(posiJson).forEach((key) => {
            if (resultKey) return false;
  
            posiJson[key].forEach((posiValue) => {
              if (posiValue === myPosition.toLowerCase()) { resultKey = key; return false; }
            });
          });
  
          posiResult.push(resultKey);
        });
  
        /**
         * 덧글로 입력한 티어을 분석해서 코드에필요한 티어데이터로 가공
         * ../script/PositionTierData 에 정의
         */
        var myTier = commentDataArr[1];
  
        var tierJson = pattern_kor.test(myTier) ? tierKorJson : tierEngJson;
  
        Object.getOwnPropertyNames(tierJson).forEach((key) => {
          if (tierResult) return false;
  
          tierJson[key].forEach((tierValue) => {
            if (myTier.toLowerCase().indexOf(tierValue) > -1) { tierResult = key; return false; }
          });
        });
      };
  
      /**
       * 덧글내용중 '<', '>', '&' 치환
       */
      if (item.comment) {
        item.comment = item.comment.replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&amp;", "&");
      }
  
      /**
       * 가공한 데이터를 최종결과변수에 넣기
       */
      result.push({
        userId: item.user_id,
        userNick: item.user_nick,
        profileImage: item.profile_image,
        comment: item.comment,
        likeCnt: item.like_cnt,
        myPosition: posiResult,
        myTier: tierResult,
        side: 'center', //side 초기값
        position: '' //position 초기값
      });
    });
  
    /**
     * store에 dispatch실행
     */
    dispatch({ type: 'click_refresh', memberList: result });
  }

function getLogUrl() {
    fetch(`https://lolmatch-49698-default-rtdb.firebaseio.com/logs.json`)
    .then(res => {
      console.log(res.json());
    });
  }

function mapStateToProps(reduxState) {
    return {
        selectedPosiView: reduxState.selectedPosiView,
        typedText: reduxState.typedText,
        memberList: reduxState.memberList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (target) => dispatch({type: 'click_posiViewIcon', posiViewIcon: target}),
        onChange: (value) => dispatch({type: 'search_nick', nick: value}),
        getLogs: () => getLogUrl(),
        refresh: () => refresh(dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MembersHeader);