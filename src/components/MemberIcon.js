import React, { Component } from 'react';

import '../MemberCard.css';
import styled from 'styled-components';

import iimg from '../images/ranked-emblems/Emblem_Iron.png';
import bimg from '../images/ranked-emblems/Emblem_Bronze.png';
import simg from '../images/ranked-emblems/Emblem_Silver.png';
import gimg from '../images/ranked-emblems/Emblem_Gold.png';
import pimg from '../images/ranked-emblems/Emblem_Platinum.png';
import dimg from '../images/ranked-emblems/Emblem_Diamond.png';
import mimg from '../images/ranked-emblems/Emblem_Master.png';
import gmimg from '../images/ranked-emblems/Emblem_Grandmaster.png';
import cimg from '../images/ranked-emblems/Emblem_Challenger.png';

const TierIcon = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    left: -15px;
    top: -15px;
    display: ${props => props.src ? 'block' : 'none'};
`;

const CommentTip = styled.div`
width: 250%;
height: fit-content;
    position: absolute;
    left: 5.5rem;
    top: 0px;
    z-index: 999;
    padding: 0.3rem;
    border-radius: 5px;
    
    display:none;
    background-color : darkGray;
`;
class MemberIcon extends Component {
    toggleCommentTip = (e, isOver) => {
        if (e.target.id !== '') {
            const child = document.querySelector('.' + e.target.id);
            child.style.display = isOver ? 'block' : 'none';
        }
    };

    render() {
        let member = this.props.memberInfo;
        var imgSrc = '';
        switch (member.myTier) {
            case 'Iron': imgSrc = iimg; break;
            case 'Bronze': imgSrc = bimg; break;
            case 'Silver': imgSrc = simg; break;
            case 'Gold': imgSrc = gimg; break;
            case 'Platinum': imgSrc = pimg; break;
            case 'Diamond': imgSrc = dimg; break;
            case 'Master': imgSrc = mimg; break;
            case 'GrandMaster': imgSrc = gmimg; break;
            case 'Challenger': imgSrc = cimg; break;
            default: break;
        }

        return (
            <React.Fragment>
                <div className="memberIcon"
                    draggable
                    onDragStart={(e) => this.props.onDragStart(e, member)}
                >
                    <img src={member.profileImage} alt={member.userId} className="profile"
                        onMouseOver={(e) => { this.toggleCommentTip(e, true) }}
                        onMouseOut={(e) => { this.toggleCommentTip(e, false) }}
                        id={'comment_tip_' + member.userId}
                    />
                    <span>{member.userNick}</span>
                    <TierIcon src={imgSrc}></TierIcon>
                    <CommentTip readOnly className={'commentTip comment_tip_' + member.userId}>{member.comment}</CommentTip>
                </div>
            </React.Fragment>
        )
    }
}

export default MemberIcon;