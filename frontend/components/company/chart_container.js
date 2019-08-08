import { connect } from 'react-redux';
import Chart from './chart';
import { fetchCompanyHistoricPrices, fetchCompanyKeyStats } from '../../actions/company_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return ({
        ticker: ownProps.match.params.ticker,
    })
}


const mdp = dispatch => {
    return ({
        fetchCompanyHistoricPrices: (ticker, range, interval) => dispatch(fetchCompanyHistoricPrices(ticker, range, interval)),
        fetchCompanyKeyStats: (ticker) => dispatch(fetchCompanyKeyStats(ticker)),
    })
}

export default withRouter(connect(msp, mdp)(Chart));