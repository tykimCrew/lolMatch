import React, {Component} from 'react';

import MemberCard from './MemberCard';



class Members extends Component {
     render() {
        const cmtElList = this.props.memberList.map( memberInfo =>
            <MemberCard key={memberInfo.userId}
                        memberInfo={memberInfo}
                        onDragStart={this.props.onDragStart}
            />
        );

        return (
            <React.Fragment>
                {cmtElList}
            </React.Fragment>
        )
    }
}

export default Members;