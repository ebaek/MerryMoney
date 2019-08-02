import { combineReducers } from 'redux';
import {RECEIVE_COMPANY, RECEIVE_COMPANY_DATA} from '../actions/company_actions';

const companiesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_COMPANY:
            return Object.assign({}, state, {[action.company.ticker]: action.company})
        case RECEIVE_COMPANY_DATA:
            return Object.assign({}, state, {[action.ticker]: action.company_data})
        default:
            return state;
    }
}

export default companiesReducer;