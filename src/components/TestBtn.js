import React, {Component} from 'react';
import $ from 'jquery';

class TestBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cmtList: [],
        };
    }

    getCmtListAjax = () => {
        var cmtUrl = "http://bjapi.afreecatv.com/api/khm11903/title/65714065/comment?page=1&orderby=like_cnt";

        $.ajax({
            url : cmtUrl,
            context : this //context : this => .done()에서 this를 사용하기위해
        })
        .done( json => this.setCmtListState(json) );
    }

    setCmtListState = (json) => {
        //cmtList 는 {user_id, user_nick, profile_image, comment, like_cnt}
        var data = json.data;
        var result = [];

        data.map(
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
    }

    render() {
        const cmtElList = this.state.cmtList.map( item =>
            <li key={item.userId}>
                <img style={{width:"48px", height:"48px"}} src={item.profileImage} alt="이미지" />
                {item.userId}({item.userNick}) / 추천수 : {item.likeCnt} / {item.comment}
            </li>
        );
        
        return (
            <div>
                <button onClick={this.getCmtListAjax}>
                    가져오기
                </button>
                <div style={{textAlign : 'left'}}>
                   {cmtElList}
                </div>
            </div>
        )
    }
    
}

export default TestBtn;