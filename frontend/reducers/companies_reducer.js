import {RECEIVE_COMPANY, RECEIVE_COMPANIES, 
    RECEIVE_COMPANY_BASICS, RECEIVE_COMPANY_KEY_STATS,
    RECEIVE_COMPANY_QUOTE} from '../actions/company_actions';

const companiesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_COMPANY:
            return Object.assign({}, state, {[action.company.ticker]: action.company});
        case RECEIVE_COMPANIES:
            return Object.assign({}, action.companies);
        case RECEIVE_COMPANY_BASICS:
            return Object.assign({}, state, {[action.ticker]: action.company_data});
        case RECEIVE_COMPANY_KEY_STATS: 
            const newCompanyStats = Object.assign({}, state[action.ticker], action.stats);
            const newState = Object.assign({}, state, {[action.ticker]: newCompanyStats});
            return newState;
        case RECEIVE_COMPANY_QUOTE:
            const newCompanyQuote = Object.assign({}, state[action.ticker], action.quote);
            const newQuoteState = Object.assign({}, state, { [action.ticker]: newCompanyQuote });
            return newQuoteState;
        default:
            return state;
    }
}

export default companiesReducer;