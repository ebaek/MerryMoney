import { RECEIVE_WATCHLIST, REMOVE_WATCHLIST_ITEM, RECEIVE_WATCHLIST_ITEM} from '../actions/watchlist_actions';

const watchlistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WATCHLIST:
            return Object.assign({}, action.watchlist);
        case RECEIVE_WATCHLIST_ITEM:
            return Object.assign({}, state, { [action.watchlist_item.id]: action.watchlist_item });
        case REMOVE_WATCHLIST_ITEM:
            let newState = merge({}, state);
            delete newState[action.watchlist_item.id];
            return newState;
        default:
            return state;
    }
}

export default watchlistsReducer;