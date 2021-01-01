import React, {Component} from 'react';
import styled from 'styled-components';

import allImg from '../images/position_default_img/All.png';
import topImg from '../images/position_default_img/Top.png';
import jungleImg from '../images/position_default_img/Jungle.png';
import midImg from '../images/position_default_img/Mid.png';
import botImg from '../images/position_default_img/Bot.png';
import supportImg from '../images/position_default_img/Support.png';

const STR_ALL = 'All';
const STR_TOP = 'Top';
const STR_JUNGLE = 'Jungle';
const STR_MID = 'Mid';
const STR_BOT = 'Bot';
const STR_SUPPORT = 'Support';

var PosiIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${props => props.selected ? '#ffcc6252': ''};
`;

var PosiCnt = styled.div`
    position: absolute;
    width: 30px;
    height: 20px;
    top:-15px;
    left:${props => props.index * 50 - 10}px;
    border-radius: 10px;
    background: #ffca61;
    font-size:0.9rem;
    text-align:center;
`;

export default class MembersHeader extends Component {
    render() {
        var allCnt = this.props.memberList ? this.props.memberList.filter(e => (e.side === 'center')).length : 0;;
        var topCnt = this.props.memberList ? this.props.memberList.filter(e => (e.myPosition.indexOf('Top') > -1) && (e.side === 'center')).length : 0;
        var jungleCnt = this.props.memberList ? this.props.memberList.filter(e => (e.myPosition.indexOf('Jungle') > -1) && (e.side === 'center')).length : 0;;
        var midCnt = this.props.memberList ? this.props.memberList.filter(e => (e.myPosition.indexOf('Mid') > -1) && (e.side === 'center')).length : 0;;
        var botCnt = this.props.memberList ? this.props.memberList.filter(e => (e.myPosition.indexOf('Bot') > -1) && (e.side === 'center')).length : 0;;
        var supportCnt = this.props.memberList ? this.props.memberList.filter(e => (e.myPosition.indexOf('Support') > -1) && (e.side === 'center')).length : 0;;

        return(
            <div style={memberSearchWrap}>
                <div>
                    <PosiIcon src={allImg} onClick={ () => this.props.onClick(STR_ALL) } selected={this.props.selectedPosiView === STR_ALL ? true : false}></PosiIcon>{this.props.memberList ? <PosiCnt index="0">{allCnt}</PosiCnt> : ''}
                    <PosiIcon src={topImg} onClick={ () => this.props.onClick(STR_TOP) } selected={this.props.selectedPosiView === STR_TOP ? true : false}/>{this.props.memberList ? <PosiCnt index="1">{topCnt}</PosiCnt> : ''}
                    <PosiIcon src={jungleImg} onClick={ () => this.props.onClick(STR_JUNGLE) } selected={this.props.selectedPosiView === STR_JUNGLE ? true : false}/>{this.props.memberList ? <PosiCnt index="2">{jungleCnt}</PosiCnt> : ''}
                    <PosiIcon src={midImg} onClick={ () => this.props.onClick(STR_MID) } selected={this.props.selectedPosiView === STR_MID ? true : false}/>{this.props.memberList ? <PosiCnt index="3">{midCnt}</PosiCnt> : ''}
                    <PosiIcon src={botImg} onClick={ () => this.props.onClick(STR_BOT) } selected={this.props.selectedPosiView === STR_BOT ? true : false}/>{this.props.memberList ? <PosiCnt index="4">{botCnt}</PosiCnt> : ''}
                    <PosiIcon src={supportImg} onClick={ () => this.props.onClick(STR_SUPPORT) } selected={this.props.selectedPosiView === STR_SUPPORT ? true : false}/>{this.props.memberList ? <PosiCnt index="5">{supportCnt}</PosiCnt> : ''}
                </div>
                <div>
                    <span style={{color: 'white'}} onClick={this.props.getLogs}>닉네임: </span><input style={searchInput} type="text" value={this.props.typedText || ''} onChange={(e) => this.props.onChange(e.target.value)}></input>
                </div>
            </div>
        );
    };
}

const memberSearchWrap = {
    marginBottom: '2rem',
    'display': 'flex',
    justifyContent: 'space-between',
    position:'relative'
};

const searchInput = {
    'height' : '1rem'
}