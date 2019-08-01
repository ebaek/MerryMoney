import React from 'react';
import { withRouter } from 'react-router-dom';
import GuestSplash from './guest_splash';
import UserSplashContainer from './user_splash_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let page;

        if (this.props.currentUser === undefined) {
            page = <GuestSplash />
        } else {
            page = <UserSplashContainer />
        }
        
        return (
            <div>
                { page }
            </div>
        );
    }
}

export default withRouter(Splash);