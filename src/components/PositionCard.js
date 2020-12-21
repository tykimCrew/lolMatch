import React, {Component} from 'react';

import MemberCard from './MemberCard';

class PositionCard extends Component {
    

    render() {
       return (
           <React.Fragment>
               <div className="positionCard"
                    onDragOver={(e) => this.props.onDragOver(e)}
                    onDrop={(e) => this.props.onDrop(e, this.props.side, this.props.position)}
                >
                    {
                        
                        this.props.memberInfo.length !== 0 ? 
                        <MemberCard memberInfo={this.props.memberInfo[0]} onDragStart={this.props.onDragStart} /> : this.props.position
                    }
                </div>
           </React.Fragment>
       )
   }
}

export default PositionCard;