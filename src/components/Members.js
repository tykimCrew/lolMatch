import React, { Component } from 'react';

import MembersHeader from '../containers/MembersHeader';
import MemberIcon from './MemberIcon';

import refreshImg from '../images/position_default_img/refresh.png';

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
                {
                    !this.props.memberList &&
                        <div style={{color : 'lightGray', fontSize: '1.5rem'}}>
                            <p>
                                1. 방송국 게시판 URL을 위에 복사/붙여넣기 하여 검색 해 주세요
                                <span style={{color : 'darkGray', fontSize: '1rem'}}>&nbsp;&nbsp;&nbsp;&nbsp;ex) https://bj.afreecatv.com/cleansun909/post/66109877</span>
                            </p>
                            <p>2. 기본 인기순(추천수 많은순), 최대 100명 입니다.</p>
                            <br/>
                            <h2>#변경사항#</h2>
                            <h5>21.01.03</h5>
                            <p>1. 중앙에 초상화이미지에 마우스 올릴시, 전체 덧글내용 toolTip 추가</p>
                            <p>2. 새롭게달린 덧글만 추가로 불러오려면 '검색' 버튼말고 <img style={{width:'40px', height: '40px', background:'gray', borderRadius:'5px'}} src={refreshImg}></img>를 클릭해주세요.</p>
                        </div>
                }
            </React.Fragment>
        )
    }
}

export default Members;