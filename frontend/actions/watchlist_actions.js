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

export const removeWatchListItem = (id) => ({
    type: DELETE_WATCHLIST_ITEM,
    id,
})

export const fetchWatchlist = () => (dispatch) => {
    return APIUtil.fetchWatchList().then( (watchlist) => dispatch(receiveWatchlist(watchlist)));
};

export const createWatchlistItem = (item) => (dispatch) => {
    return APIUtil.createWatchListItem(item).then( (item) => dispatch(receiveWatchlistItem(item)));
};

export const deleteWatchlistItem = (id) => (dispatch) => {
    return APIUtil.deleteWatchListItem(id).then( (id) => dispatch(deleteWatchListItem(id)))
};