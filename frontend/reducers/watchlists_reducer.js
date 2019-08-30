import { RECEIVE_WATCHLIST, DELETE_WATCHLIST_ITEM, RECEIVE_WATCHLIST_ITEM} from '../actions/watchlist_actions';

const watchlistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WATCHLIST:
            return Object.assign({}, action.watchlist);
        case RECEIVE_WATCHLIST_ITEM:
            return Object.assign({}, state, { [action.watchlist_item.id]: action.watchlist_item });
        case DELETE_WATCHLIST_ITEM:
            let newState = Object.assign({}, state);
            delete newState[action.watchlistItem.id];
            return newState;
        default:
            return state;
    }
}

export default watchlistsReducer;