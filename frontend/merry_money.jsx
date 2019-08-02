//React 
import React from 'react'; 
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store'

// TEST
import { login, logout, signup } from './actions/session_actions'
import { fetchCompany, fetchCompanyBasics, createCompany } from './actions/company_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // TEST START
        window.getState = store.getState;
        window.dispatch = store.dispatch;

        window.login = login;
        window.logout = logout;
        window.signup = signup;


        window.fetchCompany = fetchCompany;
        window.fetchCompanyBasics = fetchCompanyBasics;
        window.createCompany = createCompany;
    // TEST END

    debugger

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});