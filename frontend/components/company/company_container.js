import { connect } from 'react-redux';
import Company from './company';
import { withRouter } from 'react-router-dom' 

const msp = (state, ownProps) => {
    return ({
        ticker: ownProps.match.params.ticker,
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        fetchCompanyBasics: (ticker) => dispatch(fetchCompanyBasics(ticker)),
    })
}

export default withRouter(connect(msp, mdp)(Company));