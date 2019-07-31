import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers 
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import LogInFormContainer from './session_forms/login_form_container';

// Routes
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;