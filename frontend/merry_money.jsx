//React 
import React from 'react'; 
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store'

// TEST
import { createTransaction, fetchTransactions } from './actions/transactions_actions'

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

    // TEST END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});