import { connect } from 'react-redux';
import { requestBusinesses } from '../../actions/biz_actions';
import { login, logout } from '../../actions/session_actions';
import BizIndex from './biz_index';

const msp = (state, ownProps) => {
  const extraClass = "biz-index";
  const businesses = state.entities.businesses || {};
  return ({
    businesses,
    extraClass,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
  });
};

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    submitForm: user => dispatch(login(user)),
    requestBusinesses: () => dispatch(requestBusinesses())
  });
};

export default connect(msp, mdp)(BizIndex);