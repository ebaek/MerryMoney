import React from 'react';
import ReactDOM from 'react-dom';

import {login, logout, signup} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // TEST START
        window.login = login;
        window.logout = logout;
        window.signup = signup;
    // TEST END

    ReactDOM.render(<h1>Welcome to MerryMoney</h1>, root);
});