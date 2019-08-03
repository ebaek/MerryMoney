import { connect } from 'react-redux';
import Chart from './chart';
import { fetchCompanyHistoricPrices, fetchCompanyKeyStats, fetchCompanyQuote } from '../../actions/company_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return ({
        ticker: ownProps.match.params.ticker,
    })
}

const mdp = dispatch => {
    return ({
        fetchCompanyHistoricPrices: (ticker) => dispatch(fetchCompanyHistoricPrices(ticker)),
        fetchCompanyKeyStats: (ticker) => dispatch(fetchCompanyKeyStats(ticker)),
        fetchCompanyQuote: (ticker) => dispatch(fetchCompanyQuote(ticker)),
    })
}

export default withRouter(connect(msp, mdp)(Chart));