import {RECEIVE_COMPANY, RECEIVE_COMPANIES, RECEIVE_COMPANY_BASICS, RECEIVE_COMPANY_KEY_STATS} from '../actions/company_actions';

const companiesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_COMPANY:
            return Object.assign({}, state, {[action.company.ticker]: action.company});
        case RECEIVE_COMPANIES:
            return Object.assign({}, action.companies);
        case RECEIVE_COMPANY_BASICS:
            return Object.assign({}, state, {[action.ticker]: action.company_basics});
        case RECEIVE_COMPANY_KEY_STATS: 
            const newCompanyStats = Object.assign({}, state[action.ticker], action.stats);
            const newState = Object.assign({}, state, {[action.ticker]: newCompanyStats});
            debugger
            return newState;
        default:
            return state;
    }
}

export default companiesReducer;