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
                    <img src={process.env.PUBLIC_URL + '/images/position_default_img/' + this.props.position +'.png'}
                        alt={this.props.position}
                        className="positionIcon"
                    />
                    {
                        this.props.memberInfo.length !== 0 ? 
                        <MemberCard memberInfo={this.props.memberInfo[0]} onDragStart={this.props.onDragStart} /> :''
                    }
                </div>
           </React.Fragment>
       )
   }
}

export default PositionCard;