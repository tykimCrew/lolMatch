import { connect } from 'react-redux';
import Members  from '../components/Members'

function mapStateToProps(reduxState) {
    return {
        memberList: reduxState.memberList && reduxState.memberList.filter( (item) => item.side === 'center'),
        selectedPosiView: reduxState.selectedPosiView,
        typedText: reduxState.typedText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDragStart: (e, dragUserInfo) => e.dataTransfer.setData('dragUserInfo', JSON.stringify(dragUserInfo))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Members);