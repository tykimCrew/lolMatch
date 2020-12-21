import React, { Component } from 'react';
import './App.css';


import $ from 'jquery';
import BoardUrlInput from './components/BoardUrlInput';
import Members from './components/Members';
import Positions from './components/Positions';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cmtList: [],
    };
  }

  getCmtListAjax = (boardUrl) => {
    // apiUrl = "https://bjapi.afreecatv.com/api/khm11903/title/65714065/comment?page=1&orderby=like_cnt";
     boardUrl = 'http://bj.afreecatv.com/khm11903/post/65714065';

    var urlArr = boardUrl.split('/');
    var url = 'https://bjapi.afreecatv.com/api/' + urlArr[3] + '/title/' + urlArr[5] + '/comment?page=1&orderby=like_cnt';

    $.ajax({
        url : url,
        context : this //context : this => .done()에서 this를 사용하기위해
    })
    .done( json => {
        var result = [];

        json.data.map(
            item => result.push({
                userId : item.user_id,
                userNick : item.user_nick,
                profileImage : item.profile_image,
                comment : item.comment,
                likeCnt : item.like_cnt,
                side : 'center',
                position : ''
            })
        );

        this.setState({
            cmtList : result
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
            />
          </div>
          <div className="bottom_center">
            <Members side="center"
              memberList={members['center']}
              onDragStart={this.onDragStart}
            />
          </div>
          <div className="bottom_right">
            <Positions side="blue" 
              memberList={members['blue']}
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
              onDragStart={this.onDragStart}
            />
          </div>

        </div>

      </div>
    );
  };
}

export default App;
