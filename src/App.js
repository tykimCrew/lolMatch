import React, { Component } from 'react';
import './App.css';

import $ from 'jquery';
import Members from './components/Members';
import BoardUrlInput from './components/BoardUrlInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cmtList: [],
    };
  }

  getCmtListAjax = (boardUrl) => {
    // apiUrl = "https://bjapi.afreecatv.com/api/khm11903/title/65714065/comment?page=1&orderby=like_cnt";
    // boardUrl = http://bj.afreecatv.com/khm11903/post/65825754

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
                likeCnt : item.like_cnt
            })
        );

        this.setState({
            cmtList : result
        });
    });
}

  render() {
    
    return (
      <div className="App">

        <div>
          <BoardUrlInput onBtnClick={this.getCmtListAjax} />
        </div>

        <div>

          <div></div>
          <div><Members memberList={this.state.cmtList}/></div>
          <div></div>

        </div>

      </div>
    );
  };
}

export default App;
