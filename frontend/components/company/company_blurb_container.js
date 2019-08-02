import { connect } from 'react-redux';
import CompanyBlurb from './company_blurb';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        ticker: ownProps.match.params.ticker,
        defaultCompany: { symbol: '', CEO: '', companyName: '',
            description: '', employees: '', exchange: '', industry: '',
            sector: '', website:''},
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        fetchCompanyBasics: (ticker) => dispatch(fetchCompanyBasics(ticker)),
    })
}

export default withRouter(connect(msp, mdp)(CompanyBlurb));