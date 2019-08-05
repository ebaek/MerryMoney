import * as APIUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

const receiveTransaction = (transaction) => {
    return({
        type: RECEIVE_TRANSACTION,
        transaction,
    })
}

const receiveTransactions = (transactions) => {
    return({
        type: RECEIVE_TRANSACTIONS,
        transactions,
    })
}

export const createTransaction = (transaction) => (dispatch) => {
    return APIUtil.createTransaction(transaction)
        .then( (transaction) => dispatch(receiveTransaction(transaction)));
}

export const fetchTransactions = (transactions) => (dispatch) => {
    return APIUtil.fetchTransactions(transactions)
        .then( (transactions) => dispatch(receiveTransactions(transactions)));
}

