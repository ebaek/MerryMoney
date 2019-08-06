import { connect } from 'react-redux';
import TransactionsChart from './transactions_chart';
import { fetchTransactions } from '../../actions/transactions_actions';
import { fetchCompanyClosePrices } from '../../actions/company_actions'

const msp = (state) => {
    return({
        user: state.entities.users[state.session.id],
    });
}

const mdp = (dispatch) => {
    return({
        fetchTransactions: () => dispatch(fetchTransactions()),
        fetchCompanyClosePrices: (ticker, timeframe, interval) => dispatch(fetchCompanyClosePrices(ticker, timeframe, interval)),
    });
}

export default connect(msp, mdp)(TransactionsChart);