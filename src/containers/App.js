import { connect } from 'react-redux';
import App  from '../App'

function mapStateToProps(reduxState) {
    return {
        selectedPosiView: reduxState.selectedPosiView
    };
}

export default connect(mapStateToProps, null)(App);