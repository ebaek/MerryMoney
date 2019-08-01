import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers 
import SplashContainer from './splash/splash_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import LogInFormContainer from './session_forms/login_form_container';

// Routes
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;