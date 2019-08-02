import { connect } from 'react-redux';
import CompanyBlurb from './company_blurb';
import {fetchCompanyBasics, fetchCompanyKeyStats, fetchCompanyQuote} from '../../actions/company_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        ticker: ownProps.match.params.ticker,
    })
}

const mdp = dispatch => {

    return ({
        logout: () => dispatch(logout()),
        fetchCompanyBasics: (ticker) => dispatch(fetchCompanyBasics(ticker)),
        fetchCompanyKeyStats: (ticker) => dispatch(fetchCompanyKeyStats(ticker)),
        fetchCompanyQuote: (ticker) => dispatch(fetchCompanyQuote(ticker)),
    })
}

export default withRouter(connect(msp, mdp)(CompanyBlurb));