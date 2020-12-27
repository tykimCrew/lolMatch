import React, { Component } from 'react';
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
    width: 50px;
    height: 50px;
`;

class MemberCard extends Component {
    render() {
        let member = this.props.memberInfo;
        let posiIconList = [];
        if (Object.keys(member).length !== 0) {
            member.myPosition.forEach((p, index) => {
                posiIconList.push(<img key={index} src={process.env.PUBLIC_URL + '/images/Position_' + member.myTier + '-' + p + '.png'} alt="" />)
            });

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
        }

        return (
            <React.Fragment>
                <div className="memberCard container"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('dragUserInfo', JSON.stringify(member))}
                >
                    {
                        this.props.side === 'red' ?
                            <div className="img-container"><img src={member.profileImage} alt={member.userId} /></div> : ''
                    }
                    <div className="content">
                        <div>
                            <p className="userNick">{member.userNick}</p>
                            <span className="userId">{member.userId}</span>
                        </div>
                        <TierIcon src={imgSrc} />
                    </div>
                    {
                        this.props.side === 'blue' ?
                            <div className="img-container"><img src={member.profileImage} alt={member.userId} /></div> : ''
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default MemberCard;