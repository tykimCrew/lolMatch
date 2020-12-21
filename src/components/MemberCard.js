import React, {Component} from 'react';
//import '../MemberCard.css';
//import images from '../images/Position_Bronze-Bot.png';

class MemberCard extends Component {
    
    render() {
        let member = this.props.memberInfo;
       /**
        * memberInfo
        * 
        * userId : item.user_id,
        * userNick : item.user_nick,
        * profileImage : item.profile_image,
        * comment : item.comment,
        * likeCnt : item.like_cnt
        * 
        */
       return (
           <React.Fragment>
               <div className="memberCard container"
                draggable
                onDragStart={ (e) => this.props.onDragStart(e, this.props.memberInfo) }
               >
                    {
                        this.props.side === 'red' ? 
                        <div className="img-container"><img src={member.profileImage} alt={member.userId}/></div> : ''
                    }
                    <div className="content">
                        <div className="head">
                            <p>{member.userNick} <span>{member.userId}</span></p>
                            {/* 추천수: {member.likeCnt} */}
                        </div>
                        <div className="data">
                            <div className="inner-data">
                                {/* <p className="nick">한번만주세요</p> */}
                                <img src={process.env.PUBLIC_URL + '/images/Position_Grandmaster-Jungle.png'} alt={member.userId}/>
                                <p className="nick">SILVER 3</p>
                            </div>
                        </div>
                    </div>   
                    {
                        this.props.side === 'blue' ? 
                        <div className="img-container"><img src={member.profileImage} alt={member.userId}/></div> : ''
                    }
                </div>
           </React.Fragment>
       )
   }
}

export default MemberCard;