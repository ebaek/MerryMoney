export const createWatchListItem = (item) => {
    return $.ajax({
        method: 'POST',
        url: '/api/watchlists',
        data: { item }
    })
};

export const fetchWatchList = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/watchlists'
    })
};

export const deleteWatchListItem = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/watchlists/${id}`,
        id: id,
    })
};