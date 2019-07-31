import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers 
import GuestSplashContainer from './splash/guest_splash_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import LogInFormContainer from './session_forms/login_form_container';

// Routes
import { AuthRoute } from '../util/route_util';


// EDIT THE GUEST SPLASH CONTAINER TO RENDER SPLASH CONTAINER LATER 

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GuestSplashContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;