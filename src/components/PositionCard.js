import React, { Component } from 'react';

import MemberCard from './MemberCard';

class PositionCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="positionCard"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => this.props.onDrop(e, this.props.side, this.props.position)}
                >
                    {
                        this.props.memberInfo && this.props.side === 'blue' ?
                            <span style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.props.onClick(this.props.memberInfo.userId)}>X</span> : ''
                    }
                    {
                        this.props.memberInfo && this.props.side === 'blue' ?
                            <MemberCard memberInfo={this.props.memberInfo} onDragStart={this.props.onDragStart} side={this.props.side} /> : ''
                    }
                    <img src={process.env.PUBLIC_URL + '/images/position_default_img/' + this.props.position + '.png'}
                        alt={this.props.position}
                        className="positionIcon"
                    />
                    {
                        this.props.memberInfo && this.props.side === 'red' ?
                            <MemberCard memberInfo={this.props.memberInfo} onDragStart={this.props.onDragStart} side={this.props.side} /> : ''
                    }
                    {
                        this.props.memberInfo && this.props.side === 'red' ?
                            <span style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.props.onClick(this.props.memberInfo.userId)}>X</span> : ''
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default PositionCard;