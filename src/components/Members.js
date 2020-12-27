import React, { Component } from 'react';

import MembersHeader from '../containers/MembersHeader';
import MemberIcon from './MemberIcon';

class Members extends Component {
    render() {
        const cmtElList = [];
        if(this.props.memberList) {
            this.props.memberList.forEach(memberInfo => {
                if(this.props.selectedPosiView === 'All' || memberInfo.myPosition.indexOf(this.props.selectedPosiView) > -1) {
                    if(!this.props.typedText || memberInfo.userNick.indexOf(this.props.typedText) > -1) {
                        cmtElList.push(<MemberIcon key={memberInfo.userId} memberInfo={memberInfo} onDragStart={this.props.onDragStart}/>);
                    }
                }
            });
        }

        return (
            <React.Fragment>
                <MembersHeader/>
                {cmtElList}
            </React.Fragment>
        )
    }
}

export default Members;