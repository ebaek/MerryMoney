//React 
import React from 'react'; 
import ReactDOM from 'react-dom';

//Components
import configureStore from './store/store';
import {login, logout, signup} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    // TEST START
        window.getState = store.getState;
        window.dispatch = store.dispatch;
        window.login = login;
        window.logout = logout;
        window.signup = signup;
    // TEST END

    ReactDOM.render(<h1>Welcome to MerryMoney</h1>, root);
});