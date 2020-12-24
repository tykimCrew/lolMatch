import React, { Component } from 'react';
import './App.css';

import $ from 'jquery';
import BoardUrlInput from './components/BoardUrlInput';
import Members from './components/Members';
import Positions from './components/Positions';

// import { testCommentData } from './script/testCommentData';
import update from 'react-addons-update';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionViewState: 'All',
      searchNickStr: '',
      cmtList: [],
    };
  }

  getCmtListAjax = (boardUrl) => {
    // apiUrl = "https://bjapi.afreecatv.com/api/khm11903/title/65714065/comment?page=1&orderby=like_cnt";
     //boardUrl = 'http://bj.afreecatv.com/khm11903/post/65714065';

    var urlArr = boardUrl.split('/');
    var url = 'https://bjapi.afreecatv.com/api/' + urlArr[3] + '/title/' + urlArr[5] + '/comment?page=1&orderby=like_cnt';

    $.ajax({
        url : url,
        context : this //context : this => .done()에서 this를 사용하기위해
    })
    .done( json => {
        var result = [];

        //var myPosition = '';
        //var myTier = '';

        //가져온 JSON데이터로 내가원하는데이터만 뽑기.
        json.data.forEach( (item, index) => {
          
          //포지션(최대5개',') / 최대티어 / 인증롤ID / 각오
          // let posiArr = ['Top', 'Jungle', 'Mid', 'Bot', 'Support'];
          // let tierArr = ['Iron', 'Bronze ', 'Silver', 'Gold', 'Plat', 'Diamond', 'Master', 'GrandMaster', 'Challenger'];
          // if (index > 0) return; 
          // item.comment = '원딜,sup,미드/플래4/test/화이팅1';
          //item.comment = testCommentData[index];

          var commentDataArr = item.comment.split('/');

          if(!commentDataArr || commentDataArr.length < 2) return;

          var myPositions = commentDataArr[0].split(',');
          var myTier = commentDataArr[1];
          //var myLolNick = commentDataArr[2];
          //var myDazim = commentDataArr[3];

          var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

          let posiKorJson = {
            'Top' : ['탑', '탑라이너'],
            'Jungle' : ['정글'],
            'Mid' : ['미드','미드라이너'],
            'Bot' : ['봇','원딜','바텀'],
            'Support' : ['서폿','서포터']
          }

          let posiEngJson = {
            'Top' : ['top'],
            'Jungle' : ['jungle','jg'],
            'Mid' : ['mid'],
            'Bot' : ['bot','ad', 'adcarry'],
            'Support' : ['support','supporter','sup']
          }

          var posiResult = [];
          myPositions.forEach( (myPosition) => {
            var posiJson = pattern_kor.test(myPosition) ? posiKorJson : posiEngJson;
            var resultKey = '';

            Object.getOwnPropertyNames(posiJson).forEach( (key) => {
              if (resultKey) return false;

              posiJson[key].forEach( (posiValue) => {
                if(posiValue === myPosition.toLowerCase()) { resultKey = key; return false;}
              });
            });

            posiResult.push(resultKey);
          });

          let tierKorJson = {
            'Iron' : ['아이언'],
            'Bronze' : ['브론즈', '브'],
            'Silver' : ['실버', '실'],
            'Gold' : ['골드', '골'],
            'Platinum' : ['플래티넘', '플레티넘', '플래', '플레', '플'],
            'Diamond' : ['다이아몬드', '다이아', '다'],
            'Master' : ['마스터'],
            'GrandMaster' : ['그랜드마스터', '그마'],
            'Challenger' : ['챌린저', '챌', '첼린저', '첼']
          }

          let tierEngJson = {
            'Iron' : ['i', 'iron'],
            'Bronze' : ['b', 'bronze'],
            'Silver' : ['s', 'silver'],
            'Gold' : ['g', 'gold'],
            'Platinum' : ['p', 'platinum'],
            'Diamond' : ['d', 'diamond'],
            'Master' : ['m', 'master'],
            'GrandMaster' : ['gm', 'grandmaster'],
            'Challenger' : ['c', 'challenger']
          }

          var tierResult = '';
          var tierJson = pattern_kor.test(myTier) ? tierKorJson : tierEngJson;

          Object.getOwnPropertyNames(tierJson).forEach( (key) => {
            if (tierResult) return false;

            tierJson[key].forEach( (tierValue) => {
              if(myTier.toLowerCase().indexOf(tierValue) > -1) { tierResult = key; return false; }
            });
          });

          result.push({
            userId : item.user_id,
            userNick : item.user_nick,
            profileImage : item.profile_image,
            comment : item.comment,
            likeCnt : item.like_cnt,
            myPosition : posiResult,
            myTier : tierResult,
            //myLolNick : myLolNick,
            //myDazim : myDazim,
            side : 'center',
            position : ''
          });

          this.setState({
              cmtList : result
          });
        });
    });
  }

  onDragStart = (e, dragUserInfo) => {
    e.dataTransfer.setData('dragUserInfo', JSON.stringify(dragUserInfo));
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, side, position) => {
      let dragUserInfo = JSON.parse(e.dataTransfer.getData('dragUserInfo'));
      //console.log(dragUserInfo.userId);

      let cmtList = this.state.cmtList.filter( member => {
        if(member.side === side && member.position === position) { //이미 해당포지션에 누가있다면
          if(dragUserInfo.side === 'center') { //내가 센터에서왔다면 센터로보내고
            member.side = 'center';
            member.position = '';
          } else { //센터에서 온게아니라 자리교체라면
            member.side = dragUserInfo.side;
            member.position = dragUserInfo.position;
          }
        }

        if(member.userId === dragUserInfo.userId) {
          member.side = side;
          member.position = position;
        }

        return member;
      });

      this.setState({
        ...this.state,
        cmtList
      });
  }

  onPosiViewClick = (posiTarget) => {
    this.setState({
      positionViewState:posiTarget
    });
  }

  onTypingSearchNick = (typedText) => {
    this.setState({
      searchNickStr:typedText
    });
  }

  moveCenter = (moveTargetUserId) => {
    this.state.cmtList.forEach( (member, index) => {
      if(member.userId === moveTargetUserId) {
        this.setState({
          cmtList: update(
            this.state.cmtList,
            {
              [index]: {
                side: {$set: 'center'}
              }
            }
          )
        });
      }
    });
  }

  render() {
    var members = {
      red : [],
      center : [],
      blue : []
    };

    this.state.cmtList.forEach( member => {
      members[member.side].push(member);
    });

    
    return (
      <div className="App">
        <div className="top">
          <BoardUrlInput onBtnClick={this.getCmtListAjax} />
        </div>

        <div className="bottom">

          <div className="bottom_left">
            <Positions side="red"
              memberList={members['red']}
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
              onDragStart={this.onDragStart}
              onMoveCenterClick={this.moveCenter}
            />
          </div>
          <div className="bottom_center">
            <Members side="center"
              memberList={members['center']}
              onDragStart={this.onDragStart}
              onPosiViewClick={this.onPosiViewClick}
              posiViewState={this.state.positionViewState}
              onTypingSearchNick={this.onTypingSearchNick}
              typedText={this.state.searchNickStr}
            />
          </div>
          <div className="bottom_right">
            <Positions side="blue" 
              memberList={members['blue']}
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
              onDragStart={this.onDragStart}
              onMoveCenterClick={this.moveCenter}
            />
          </div>

        </div>

      </div>
    );
  };
}

export default App;
