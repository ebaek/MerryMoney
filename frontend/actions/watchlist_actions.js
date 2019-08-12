import * as APIUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_WATCHLIST_ITEM = 'RECEIVE_WATCHLIST_ITEM';
export const DELETE_WATCHLIST_ITEM = 'DELETE_WATCHLIST_ITEM';

export const receiveWatchlist = (watchlist) => ({
    type: RECEIVE_WATCHLIST,
    watchlist,
});

export const receiveWatchlistItem = (watchlist_item) => ({
    type: RECEIVE_WATCHLIST_ITEM,
    watchlist_item,
});

export const removeWatchlistItem = (watchlistItem) => ({
    type: DELETE_WATCHLIST_ITEM,
    watchlistItem,
})

export const fetchWatchlist = () => (dispatch) => {
    return APIUtil.fetchWatchlist().then( (watchlist) => dispatch(receiveWatchlist(watchlist)));
};

export const createWatchlistItem = (ticker) => (dispatch) => {
    return APIUtil.createWatchlistItem(ticker).then( (item) => dispatch(receiveWatchlistItem(item)));
};

export const deleteWatchlistItem = (id) => (dispatch) => {
    return APIUtil.deleteWatchlistItem(id).then( (res) => dispatch(removeWatchlistItem(res)))
};