import { connect } from 'react-redux';
import GuestSplash from './guest_splash';

const msp = ({session, entities: { users } }) => {
    return({
        currentUser: users[session.id],
    });
};

export default connect(msp, null)(GuestSplash);