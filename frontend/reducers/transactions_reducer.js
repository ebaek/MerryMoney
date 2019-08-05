import { RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS} from '../actions/transactions_actions'

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TRANSACTION:
            return Object.assign({}, state, {[action.transaction.id]: action.transaction})
        case RECEIVE_TRANSACTIONS:
            return Object.assign({}, action.transactions);
        default: 
            return state;
    }
}

export default transactionsReducer;