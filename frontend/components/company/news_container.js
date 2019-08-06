import { connect } from 'react-redux';
import News from './news';
import { withRouter } from 'react-router-dom' 
import { fetchNews } from '../../actions/news_actions';

const msp = (state, ownProps) => {
    return ({
        ticker: ownProps.match.params.ticker,
    })
}

const mdp = (dispatch) => {
    return({
        fetchNews: (search) => dispatch(fetchNews(search)),
    })
}

export default withRouter(connect(msp, mdp)(News));
