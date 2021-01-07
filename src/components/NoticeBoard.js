import React, { Component } from 'react';

//import refreshImg from '../images/position_default_img/refresh.png';

import commentEx from '../images/comment_ex.PNG';

export default class NoticeBoard extends Component {
    render() {
        return(
            <React.Fragment>
                <div style={{color : 'lightGray', fontSize: '1.5rem'}}>
                    <p>
                        1. 방송국 CK게시판 URL을 위에 복사/붙여넣기 하여 검색 해 주세요 (방송국 메인게시판 X)<br/>
                        <span style={{color : 'darkGray', fontSize: '1rem'}}>&nbsp;&nbsp;&nbsp;&nbsp;ex) https://bj.afreecatv.com/cleansun909/post/66109877</span>
                    </p>
                    <p>2. 기본 인기순(추천수 많은순), 최대 100명 입니다.</p>
                    <p>3. 덧글양식 <strong style={{color:'yellow'}}>꼭</strong> 지켜주세요 -> "선호라인들( ',' 단위) / 티어" 입니다.</p>
                    <span style={{color : 'darkGray', fontSize: '1rem'}}>&nbsp;&nbsp;&nbsp;&nbsp;ex) "미드/다이아4/우주최고미드입니다 화이팅"</span><br/>
                    <span style={{color : 'darkGray', fontSize: '1rem'}}>&nbsp;&nbsp;&nbsp;&nbsp;ex) "원딜,서폿/실버2/바텀 모두가능합니다"</span><br/>
                    <span style={{color : 'darkGray', fontSize: '1rem'}}>&nbsp;&nbsp;&nbsp;&nbsp;ex) "탑/그마200/벨붕 탑 그마"</span><br/>
                    <br/>
                    <img style={{width:'700px', borderRadius:'10px'}} src={commentEx} alt="commentEx"></img>
                </div>
            </React.Fragment>
        );
    }
}