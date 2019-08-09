import { connect } from 'react-redux';
import TransactionsChart from './transactions_chart';
import { fetchTransactions } from '../../actions/transactions_actions';
import { fetchCompanyHistoricPrices } from '../../actions/company_actions'

const msp = (state) => {
    return({
        user: state.entities.users[state.session.id],
        transactions: state.entities.users[state.session.id].transactions,
    });
}

const mdp = (dispatch) => {
    return({
        fetchTransactions: () => dispatch(fetchTransactions()),
        fetchCompanyHistoricPrices: (ticker, timeframe, interval) => dispatch(fetchCompanyHistoricPrices(ticker, timeframe, interval)),
    });
}

export default connect(msp, mdp)(TransactionsChart);