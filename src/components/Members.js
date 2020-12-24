import React, { Component } from 'react';

import MemberIcon from './MemberIcon';

import allImg from '../images/position_default_img/All.png';
import topImg from '../images/position_default_img/Top.png';
import jungleImg from '../images/position_default_img/Jungle.png';
import midImg from '../images/position_default_img/Mid.png';
import botImg from '../images/position_default_img/Bot.png';
import supportIMg from '../images/position_default_img/Support.png';


class Members extends Component {
    render() {
        const cmtElList = [];
        this.props.memberList.forEach(memberInfo => {
            if(this.props.posiViewState === 'All' || memberInfo.myPosition.indexOf(this.props.posiViewState) > -1) {
                if(!this.props.typedText || memberInfo.userNick.indexOf(this.props.typedText) > -1) {
                    cmtElList.push(<MemberIcon key={memberInfo.userId} memberInfo={memberInfo} onDragStart={this.props.onDragStart}/>);
                }
            }
        });

        return (
            <React.Fragment>
                <div style={memberSearchWrap}>
                    <div style={posiIconWrap}>
                        <img onClick={() => this.props.onPosiViewClick('All')} style={posiIconStyle} src={allImg} alt="ALL" />
                        <img onClick={() => this.props.onPosiViewClick('Top')} style={posiIconStyle} src={topImg} alt="TOP" />
                        <img onClick={() => this.props.onPosiViewClick('Jungle')} style={posiIconStyle} src={jungleImg} alt="JUNGLE" />
                        <img onClick={() => this.props.onPosiViewClick('Mid')} style={posiIconStyle} src={midImg} alt="MID" />
                        <img onClick={() => this.props.onPosiViewClick('Bot')} style={posiIconStyle} src={botImg} alt="BOT" />
                        <img onClick={() => this.props.onPosiViewClick('Support')} style={posiIconStyle} src={supportIMg} alt="SUPPORT" />
                    </div>
                    <div>
                        <span style={{color: 'white'}}>닉네임: </span><input style={searchInput} type="text" value={this.props.typedText} onChange={(e) => this.props.onTypingSearchNick(e.target.value)}></input>
                    </div>
                </div>
                {cmtElList}
            </React.Fragment>
        )
    }
}

export default Members;

const posiIconStyle = {
    'width': '40px',
    'height': '40px',
    marginLeft: '10px',
    cursor:'pointer'
};

const posiIconWrap = {
    // 'border': '1px solid red',
};

const memberSearchWrap = {
    // 'border': '1px solid red',
    marginBottom: '2rem',
    'display': 'flex',
    justifyContent: 'space-between'
};

const searchInput = {
    'height' : '1rem'
}