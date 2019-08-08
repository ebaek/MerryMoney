import * as APIUtil from '../util/user_api_util';

export const UPDATE_BALANCE = "UPDATE_BALANCE";

export const receiveUser = (user) => {
    return ({
        type: UPDATE_BALANCE,
        user,
    })
}

export const updateBalance = (currentUser, deposit) => (dispatch) => {
    return APIUtil.updateBalance(currentUser, deposit)
        .then( (user) => dispatch(receiveUser(user)));
} 
