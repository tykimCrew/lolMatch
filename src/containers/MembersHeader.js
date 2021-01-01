import { connect } from 'react-redux';
import MembersHeader  from '../components/MembersHeader'

function getLogUrl() {
    fetch(`https://lolmatch-49698-default-rtdb.firebaseio.com/logs.json`)
    .then(res => {
      console.log(res.json());
    });
  }

function mapStateToProps(reduxState) {
    return {
        selectedPosiView: reduxState.selectedPosiView,
        typedText: reduxState.typedText,
        memberList: reduxState.memberList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (target) => dispatch({type: 'click_posiViewIcon', posiViewIcon: target}),
        onChange: (value) => dispatch({type: 'search_nick', nick: value}),
        getLogs: () => getLogUrl()
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MembersHeader);