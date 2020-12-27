import { connect } from 'react-redux';
import PositionCard  from '../components/PositionCard';

function mapDispatchToProps(dispatch) {
    return {
        onDrop: (e, side, position) => dispatch({type: 'drop_memberCard', e: e, side: side, position: position}),
        onClick: (userId) => dispatch({type: 'drop_toCenter', targetId: userId})
    };
}
export default connect(null, mapDispatchToProps)(PositionCard);