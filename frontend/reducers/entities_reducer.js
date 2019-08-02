import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import companiesReducer from './companies_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    companies: companiesReducer,
});

export default entitiesReducer;