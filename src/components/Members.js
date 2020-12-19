import React, {Component} from 'react';




class TestBtn extends Component {
     render() {
        const cmtElList = this.props.memberList.map( item =>
            <li key={item.userId}>
                <img style={{width:"48px", height:"48px"}} src={item.profileImage} alt="이미지" />
                {item.userId}({item.userNick}) / 추천수 : {item.likeCnt} / {item.comment}
            </li>
        );

        return (
            <React.Fragment>
                {cmtElList}
            </React.Fragment>
        )
    }
}

export default TestBtn;