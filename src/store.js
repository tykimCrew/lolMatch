import { createStore } from 'redux';

const CLICK_POSIVIEWICON = 'click_posiViewIcon';
const CHANGE_BOARDURL = 'change_boardUrl';
const AJAX_GETCMTLIST = 'ajax_getCmtList';
const DROP_MEMBERCARD = 'drop_memberCard';
const SEARCH_NICK = 'search_nick';
const DROP_TO_CENTER = 'drop_toCenter';


export default createStore((state, action) => {
    var newState = {};
    switch (action.type) {
        case CLICK_POSIVIEWICON: /**타입별 아이콘보기 클릭 */
            newState = Object.assign(newState, state, { selectedPosiView: action.posiViewIcon });
            break;
        case CHANGE_BOARDURL: /*방송국 URL입력*/
            newState = Object.assign(newState, state, { boardUrl: action.boardUrl });
            break;
        case AJAX_GETCMTLIST: /* 최초 댓글리스트 조회(AJAX) */
            newState = Object.assign(newState, state, { memberList: action.memberList, selectedPosiView: 'All', typedText: '' });
            break;
        case SEARCH_NICK: /* 닉네임검색 */
            newState = Object.assign(newState, state, { typedText: action.nick });
            break;
        case DROP_MEMBERCARD:
            let dragUserInfo = JSON.parse(action.e.dataTransfer.getData('dragUserInfo'));

            let newMemberList = state.memberList.filter(member => {
                if (member.side === action.side && member.position === action.position) { //이미 해당포지션에 누가있다면
                    if (dragUserInfo.side === 'center') { //내가 센터에서왔다면 센터로보내고
                        member.side = 'center';
                        member.position = '';
                    } else { //센터에서 온게아니라 자리교체라면
                        member.side = dragUserInfo.side;
                        member.position = dragUserInfo.position;
                    }
                }

                if (member.userId === dragUserInfo.userId) {
                    member.side = action.side;
                    member.position = action.position;
                }

                return member;
            });
            newState = Object.assign(newState, state, { memberList: newMemberList });
            break;
        case DROP_TO_CENTER:
            let newMemberList2 = state.memberList.filter(member => {
                if (member.userId === action.targetId) {
                    member.side = 'center';
                    member.position = '';
                }

                return member;
            });

            newState = Object.assign(newState, state, { memberList: newMemberList2 });

            break;
        default:
            break;
    }

    //console.log('store.js : ', newState);
    return newState;
});