import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers 
import UserSplashContainer from './splash/user_splash_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import LogInFormContainer from './session_forms/login_form_container';

// Routes
import { AuthRoute } from '../util/route_util';


// EDIT THE USER SPLASH CONTAINER TO RENDER SPLASH CONTAINER LATER 

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={UserSplashContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;