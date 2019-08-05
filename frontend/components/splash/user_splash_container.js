import { connect } from 'react-redux';
import UserSplash from './user_splash';
import { logout } from '../../actions/session_actions';

const msp = state => {
    return({
        user: state.entities.users[state.session.id],
    })
}

const mdp = dispatch => {
    return({
        logout: () => dispatch(logout()),
    })
}

export default connect(msp, mdp)(UserSplash);