import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { fetchWatchlist } from '../../actions/watchlist_actions';

const msp = (state) => {
    return ({
        watchlist_items: state.entities.watchlists,
    });
}

const mdp = (dispatch) => {
    return({
        fetchWatchlist: () => dispatch(fetchWatchlist()),
    });
};

export default connect(msp, mdp)(Watchlist)