import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TRANSACTION } from '../actions/transactions_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_TRANSACTION:
            const user_id = action.transaction.user_id;
            const oldPortValue = state[user_id].portfolio_value;
            const totalCost = action.transaction.quantity * action.transaction.purchase_price;
            const newPortValue = action.transaction.buy ? oldPortValue - totalCost : oldPortValue + totalCost;

            const newUser = Object.assign({}, state[user_id]);
            newUser.portfolio_value = newPortValue;

            return Object.assign({}, state, {[user_id]: newUser});
        default:
            return state;
    }
}

export default usersReducer;