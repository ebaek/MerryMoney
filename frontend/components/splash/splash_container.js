import { connect } from 'react-redux';
import Splash from './splash';

const msp = ({session, entities: { users } }) => {
    return({
        currentUser: users[session.id],
    });
};

export default connect(msp, null)(Splash);