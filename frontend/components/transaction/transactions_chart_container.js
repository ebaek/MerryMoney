import { connect } from 'react-redux';
import TransactionsChart from './transactions_chart';
import {} from '../../actions/transactions_actions';

const msp = (state) => {
    return({
        user: state.entities.users[state.session.id],
    })
}

const mdp = (dispatch) => {
    return({
        fetchTransactions: () => dispatch(fetchTransactions()),
    })
}

export default connect(msp, mdp)(TransactionChart);