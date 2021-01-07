import React, { Component } from 'react';

import MemberCard from './MemberCard';

class PositionCard extends Component {
    render() {
        var memberCardforBlue;
        if(this.props.memberInfo && this.props.side === 'blue') {
            memberCardforBlue = <React.Fragment>
                                    <span style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.props.onClick(this.props.memberInfo.userId)}>X</span>
                                    <MemberCard memberInfo={this.props.memberInfo} onDragStart={this.props.onDragStart} side={this.props.side} />
                                </React.Fragment>;
        }

        var memberCardforRed;
        if(this.props.memberInfo && this.props.side === 'red') {
            memberCardforRed = <React.Fragment>
                                    <MemberCard memberInfo={this.props.memberInfo} onDragStart={this.props.onDragStart} side={this.props.side} />
                                    <span style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.props.onClick(this.props.memberInfo.userId)}>X</span>
                                </React.Fragment>
        }

        return (
            <React.Fragment>
                <div className="positionCard"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => this.props.onDrop(e, this.props.side, this.props.position)}
                >
                    {memberCardforBlue}
                    <img src={process.env.PUBLIC_URL + '/images/position_default_img/' + this.props.position + '.png'}
                        alt={this.props.position}
                        className="positionIcon"
                    />
                    {memberCardforRed}
                </div>
            </React.Fragment>
        )
    }
}

export default PositionCard;