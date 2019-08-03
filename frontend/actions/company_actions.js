import * as APICompUtil from '../util/company_api_util';

export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY_BASICS = "RECEIVE_COMPANY_BASICS";
export const RECEIVE_COMPANY_KEY_STATS = "RECEIVE_COMPANY_KEY_STATS";
export const RECEIVE_COMPANY_QUOTE = "RECEIVE_COMPANY_QUOTE";
export const RECEIVE_COMPANY_HISTORIC_PRICES = "RECEIVE_COMPANY_HISTORIC_PRICES";

const receiveCompany = (company) => {
    return({
        type: RECEIVE_COMPANY,
        company,
    })
}

const receiveCompanies = companies => ({
    type: RECEIVE_COMPANIES,
    companies,
});

const receiveCompanyBasics = (company_data) => {
    return({
        type: RECEIVE_COMPANY_BASICS,
        ticker: company_data.symbol,
        company_data,
    })
}

const receiveCompanyKeyStats = (stats, ticker) => {
    return({
        type: RECEIVE_COMPANY_KEY_STATS,
        stats, 
        ticker,
    })
}

const receiveCompanyQuote = (quote) => {
    return ({
        type: RECEIVE_COMPANY_QUOTE,
        ticker: quote.symbol,
        quote,
    })
}

const receiveCompanyHistoricPrices = (prices) => {
    return ({
        type: RECEIVE_COMPANY_HISTORIC_PRICES,
        prices,
    })
}

export const fetchCompany = (ticker) => (dispatch) => {    
    return APICompUtil.fetchCompany(ticker)
        .then((company) => dispatch(receiveCompany(company), 
            (err) => dispatch(receiveErrors(err))));
}

export const fetchCompanies = () => dispatch => (
    APICompUtil.fetchCompanies()
        .then(companies => dispatch(receiveCompanies(companies)))
);

export const createCompany = (company) => (dispatch) => {
    return APICompUtil.createCompany(company)
        .then( (company) => dispatch(receiveCompany(company)));
}

export const fetchCompanyBasics = (ticker) => (dispatch) => {
    return APICompUtil.fetchCompanyBasics(ticker)
        .then( (company_data) => dispatch(receiveCompanyBasics(company_data)));
}

export const fetchCompanyKeyStats = (ticker) => (dispatch) => {
    return APICompUtil.fetchCompanyKeyStats(ticker)
        .then( (stats) => dispatch(receiveCompanyKeyStats(stats, ticker)));
}

export const fetchCompanyQuote = (ticker) => (dispatch) => {
    return APICompUtil.fetchCompanyQuote(ticker)
        .then( (quote) => dispatch(receiveCompanyQuote(quote)));
}

export const fetchCompanyHistoricPrices = (ticker, interval) => (dispatch) => {
    return APICompUtil.fetchCompanyHistoricPrices(ticker, interval)
        .then( (prices) => dispatch(receiveCompanyHistoricPrices(prices)));
} 



