import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers 
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

// Routes
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <h1>MerryMoney</h1>
            <GreetingContainer />
        </header>
        
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;