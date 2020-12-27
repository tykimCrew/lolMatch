import { connect } from 'react-redux';
import MembersHeader  from '../components/MembersHeader'

function mapStateToProps(reduxState) {
    return {
        selectedPosiView: reduxState.selectedPosiView,
        typedText: reduxState.typedText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (target) => dispatch({type: 'click_posiViewIcon', posiViewIcon: target}),
        onChange: (value) => dispatch({type: 'search_nick', nick: value})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MembersHeader);