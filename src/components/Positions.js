import React, {Component} from 'react';

import PositionCard from './PositionCard';
//import PositionCardRight from './PositionCardRight';




class Positions extends Component {
     render() {
        return (
            <React.Fragment>
                <div className={this.props.side}>
                    <PositionCard position="Top"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'Top')}
                        onMoveCenterClick={this.props.onMoveCenterClick}/>
                    <PositionCard position="Jungle"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'Jungle')}
                        onMoveCenterClick={this.props.onMoveCenterClick}/>
                    <PositionCard position="Mid"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'Mid')}
                        onMoveCenterClick={this.props.onMoveCenterClick}/>
                    <PositionCard position="Bot"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'Bot')}
                        onMoveCenterClick={this.props.onMoveCenterClick}/>
                    <PositionCard position="Support"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'Support')}
                        onMoveCenterClick={this.props.onMoveCenterClick}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Positions;