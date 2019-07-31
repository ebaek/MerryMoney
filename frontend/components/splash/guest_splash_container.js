import { connect } from 'react-redux';
// import { login, signup } from '../../actions/session_actions';
import GuestSplash from './guest_splash';

const msp = ({session, entities: { users } }) => {
    return({
        currentUser: users[session.id],
    });
};

const mdp = dispatch => {
    return({
        // login: () => dispatch(login()),
        // signup: (user) => dispatch(signup(user)),
    })
}

export default connect(msp, mdp)(GuestSplash);