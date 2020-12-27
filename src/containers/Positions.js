import { connect } from 'react-redux';
import Positions  from '../components/Positions';

function mapStateToProps(reduxState) {
    return {
        memberList: reduxState.memberList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDrop: (e, side, position) => dispatch({type: 'drop_memberCard', e: e, side: side, position: position})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Positions);