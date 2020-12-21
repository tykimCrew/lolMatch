import React, {Component} from 'react';
//import '../MemberCard.css';

class MemberIcon extends Component {
    
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
               <div className="memberIcon"
                draggable
                onDragStart={ (e) => this.props.onDragStart(e, this.props.memberInfo) }
               >
                    
                    <img src={member.profileImage} alt={member.userId}/>
                    <span>{member.userNick}</span>
                    
                     
                </div>
           </React.Fragment>
       )
   }
}

export default MemberIcon;