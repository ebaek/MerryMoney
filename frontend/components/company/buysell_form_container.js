import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transactions_actions'
import BuySellForm from './buysell_form'

const msp = (state) => {
    return({
        user_port_val: state.entities.users[state.session.id].portfolio_value,
        user_id: state.session.id,
    })
}

const mdp = (dispatch) => {
    return({
        createTransaction: (transaction) => {
            return dispatch(createTransaction(transaction));
    }})
}

export default connect(msp, mdp)(BuySellForm);