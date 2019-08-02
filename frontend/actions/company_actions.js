import * as APICompUtil from '../util/company_api_util';

export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_COMPANY_DATA = "RECEIVE_COMPANY_DATA";

const receiveCompany = (company) => {
    return({
        type: RECEIVE_COMPANY,
        company,
    })
}

const receiveCompanyFinancials = (company_data, ticker) => {
    return({
        type: RECEIVE_COMPANY_DATA,
        company_data,
        ticker,
    })
}

export const fetchCompany = (ticker) => (dispatch) => {
    return APICompUtil.fetchCompany(ticker).then( (company) => dispatch(receiveCompany(company)));
}

export const createCompany = (company) => (dispatch) => {
    return APICompUtil.createCompany(company).then( (company) => dispatch(receiveCompany(company)));
}

export const fetchCompanyBasics = (ticker) => (dispatch) => {
    return APICompUtil.fetchCompanyBasics(ticker).then( (company_data) => dispatch(receiveCompanyFinancials(company_data)))
}



