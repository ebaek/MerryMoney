import { connect } from 'react-redux';
import News from './news';
import { withRouter } from 'react-router-dom' 
import { fetchNews } from '../../actions/news_actions';
import { fetchTransactions } from '../../actions/transactions_actions';


const msp = (state, ownProps) => {
    return ({
        ticker: ownProps.match.params.ticker,
    })
}

const mdp = (dispatch) => {
    return({
        fetchNews: (search) => dispatch(fetchNews(search)),
        fetchTransactions: () => dispatch(fetchTransactions()),
    })
}

export default withRouter(connect(msp, mdp)(News));
