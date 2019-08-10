import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { fetchWatchlist } from '../../actions/watchlist_actions';
// import { fetchMostRecentPrice } from '../../actions/company_actions';

const msp = (state) => {
    return ({
        watchlist_items: state.entities.watchlists,
    });
}

const mdp = (dispatch) => {
    return({
        fetchWatchlist: () => dispatch(fetchWatchlist()),
        // fetchMostRecentPrice: (ticker) => dispatch(fetchMostRecentPrice(ticker)),
    });
};

export default connect(msp, mdp)(Watchlist)