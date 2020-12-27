import React, { Component } from 'react';

import PositionCard from '../containers/PositionCard';

class Positions extends Component {
    render() {
        var topMember,jungleMember,midMember,botMember,supportMember;
        if(this.props.memberList) {
            topMember = this.props.memberList.filter(e => e.position === 'Top' && this.props.side === e.side)[0];
            jungleMember = this.props.memberList.filter(e => e.position === 'Jungle' && this.props.side === e.side)[0];
            midMember = this.props.memberList.filter(e => e.position === 'Mid' && this.props.side === e.side)[0];
            botMember = this.props.memberList.filter(e => e.position === 'Bot' && this.props.side === e.side)[0];
            supportMember = this.props.memberList.filter(e => e.position === 'Support' && this.props.side === e.side)[0];
        }
        return (
            <React.Fragment>
                <div className={this.props.side}>
                    <PositionCard position="Top"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={topMember}
                        onMoveCenterClick={this.props.onMoveCenterClick} />
                    <PositionCard position="Jungle"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={jungleMember}
                        onMoveCenterClick={this.props.onMoveCenterClick} />
                    <PositionCard position="Mid"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={midMember}
                        onMoveCenterClick={this.props.onMoveCenterClick} />
                    <PositionCard position="Bot"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={botMember}
                        onMoveCenterClick={this.props.onMoveCenterClick} />
                    <PositionCard position="Support"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={supportMember}
                        onMoveCenterClick={this.props.onMoveCenterClick} />
                </div>
            </React.Fragment>
        )
    }
}

export default Positions;