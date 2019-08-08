import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transactions_actions';
import { updateBalance } from '../../actions/user_actions';
import BuySellForm from './buysell_form'

const msp = (state) => {
    return({
        user_port_val: state.entities.users[state.session.id].portfolio_value,
        balance: state.entities.users[state.session.id].balance,
        transactions: state.entities.transactions,
        current_user: state.entities.users[state.session.id],
        user_id: state.session.id,
    })
}

const mdp = (dispatch) => {
    return({
        createTransaction: (transaction) => dispatch(createTransaction(transaction)),
        updateBalance: (current_user, deposit) => dispatch(updateBalance(current_user, deposit)),
    })
}

export default connect(msp, mdp)(BuySellForm);