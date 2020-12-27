import { connect } from 'react-redux';
import BoardUrlInput from '../components/BoardUrlInput';

import { posiKorJson, posiEngJson, tierKorJson, tierEngJson, pattern_kor } from '../script/PositionTierData';
import $ from 'jquery';

function getCmtListAjax(boardUrl, dispatch) {
  //boardUrl = 'http://bj.afreecatv.com/khm11903/post/65714065';
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
  var url = 'https://bjapi.afreecatv.com/api/' + urlArr[3] + '/title/' + urlArr[5] + '/comment?page=1&orderby=like_cnt';

  /**
   * 덧글리스트 API 시작
   */
  $.ajax({
    url: url,
    context: this //context : this => .done()에서 this를 사용하기위해
  }).done(json => {
    var result = []; //최종 memberList 담을 변수 선언

    /**
     * 댓글을 중복으로달았을시 중복제거
     */
    var filterdCmtList = [];
    json.data.forEach((item) => {
      if (!filterdCmtList.find(cmt => cmt.user_id === item.user_id)) {
        filterdCmtList.push(item);
      }
    });

    /**
     * 가져온 JSON데이터로 내가원하는데이터만 뽑기.
     */
    filterdCmtList.forEach((item) => {

      /**
       * item.comment  = "원딜,서폿/골드4"
       */
      var commentDataArr = item.comment.split('/');
      if (!commentDataArr || commentDataArr.length < 2) return;

      /**
       * 덧글로 입력한 포지션을 분석해서 코드에필요한 포지션데이터로 가공
       * ../script/PositionTierData 에 정의
       */
      var myPositions = commentDataArr[0].split(',');
      var posiResult = [];
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
      var tierResult = '';
      var tierJson = pattern_kor.test(myTier) ? tierKorJson : tierEngJson;

      Object.getOwnPropertyNames(tierJson).forEach((key) => {
        if (tierResult) return false;

        tierJson[key].forEach((tierValue) => {
          if (myTier.toLowerCase().indexOf(tierValue) > -1) { tierResult = key; return false; }
        });
      });

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
    dispatch({ type: 'ajax_getCmtList', memberList: result });
  });
}

function mapStateToProps(reduxState) {
  return {
    boardUrl: reduxState.boardUrl
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({ type: 'change_boardUrl', boardUrl: e.target.value }),
    onClick: (boardUrl) => boardUrl && getCmtListAjax(boardUrl, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BoardUrlInput);