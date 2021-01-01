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
                {
                    cmtElList.length !== 0 ?
                        cmtElList
                        :
                        <div style={{color : 'lightGray', fontSize: '1.5rem'}}>
                            <p style={{textAlign:'center', fontSize: '2rem'}}>*꼭* 읽어주세요</p>
                            <p>1. 방송국 게시판 URL을 위에 복사/붙여넣기 하여 검색 해 주세요</p>
                            <p>2. 기본 인기순(추천수 많은순), 최대 100명 입니다.</p>
                        </div>
                }
            </React.Fragment>
        )
    }
}

export default Members;