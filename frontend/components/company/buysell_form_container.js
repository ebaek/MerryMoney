import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transactions_actions';
import { updateBalance } from '../../actions/user_actions';
import { createWatchlistItem, deleteWatchlistItem } from '../../actions/watchlist_actions';
import BuySellForm from './buysell_form'

const msp = (state) => {
    return({
        user_port_val: state.entities.users[state.session.id].portfolio_value,
        balance: state.entities.users[state.session.id].balance,
        current_user: state.entities.users[state.session.id],
        transactions: state.entities.users[state.session.id].transactions,
    })
}

const mdp = (dispatch) => {
    return({
        createTransaction: (transaction) => dispatch(createTransaction(transaction)),
        updateBalance: (current_user, deposit) => dispatch(updateBalance(current_user, deposit)),
        createWatchListItem: (item) => dispatch(createWatchlistItem(item)),   
        deleteWatchListItem: (id) => dispatch(deleteWatchlistItem(id)),
    })
}

export default connect(msp, mdp)(BuySellForm);