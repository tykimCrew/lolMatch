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
    margin-left: 10px;
    cursor: pointer;
    background-color: ${props => props.selected ? '#ffcc6252': ''};
`;

export default class MembersHeader extends Component {
    render() {
        return(
            
            <div style={memberSearchWrap}>
                <div>
                    <PosiIcon src={allImg} onClick={ () => this.props.onClick(STR_ALL) } selected={this.props.selectedPosiView === STR_ALL ? true : false}/>
                    <PosiIcon src={topImg} onClick={ () => this.props.onClick(STR_TOP) } selected={this.props.selectedPosiView === STR_TOP ? true : false}/>
                    <PosiIcon src={jungleImg} onClick={ () => this.props.onClick(STR_JUNGLE) } selected={this.props.selectedPosiView === STR_JUNGLE ? true : false}/>
                    <PosiIcon src={midImg} onClick={ () => this.props.onClick(STR_MID) } selected={this.props.selectedPosiView === STR_MID ? true : false}/>
                    <PosiIcon src={botImg} onClick={ () => this.props.onClick(STR_BOT) } selected={this.props.selectedPosiView === STR_BOT ? true : false}/>
                    <PosiIcon src={supportImg} onClick={ () => this.props.onClick(STR_SUPPORT) } selected={this.props.selectedPosiView === STR_SUPPORT ? true : false}/>
                </div>
                <div>
                    <span style={{color: 'white'}}>닉네임: </span><input style={searchInput} type="text" value={this.props.typedText || ''} onChange={(e) => this.props.onChange(e.target.value)}></input>
                </div>
            </div>
        );
    };
}

const memberSearchWrap = {
    marginBottom: '2rem',
    'display': 'flex',
    justifyContent: 'space-between'
};

const searchInput = {
    'height' : '1rem'
}