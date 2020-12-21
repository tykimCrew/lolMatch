import React, {Component} from 'react';

import MemberIcon from './MemberIcon';



class Members extends Component {
     render() {
        const cmtElList = this.props.memberList.map( memberInfo =>
            <MemberIcon key={memberInfo.userId}
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