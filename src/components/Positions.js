import React, {Component} from 'react';

import PositionCard from './PositionCard';
//import PositionCardRight from './PositionCardRight';




class Positions extends Component {
     render() {
        return (
            <React.Fragment>
                <div className={this.props.side}>
                    <PositionCard position="top"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'top')}/>
                    <PositionCard position="jungle"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'jungle')}/>
                    <PositionCard position="mid"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'mid')}/>
                    <PositionCard position="ad"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'ad')}/>
                    <PositionCard position="supporter"
                        onDragStart={this.props.onDragStart}
                        onDragOver={this.props.onDragOver}
                        onDrop={this.props.onDrop}
                        side={this.props.side}
                        memberInfo={this.props.memberList.filter(e => e.position === 'supporter')}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Positions;