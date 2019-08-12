export const createWatchlistItem = (item) => {
    return $.ajax({
        method: 'POST',
        url: '/api/watchlists',
        data: { item }
    })
};

export const fetchWatchlist = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/watchlists'
    })
};

export const deleteWatchlistItem = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/watchlists/${id}`,
        id: id,
    })
};