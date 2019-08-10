import React from 'react';
import { withRouter } from 'react-router-dom';
import TransactionsChart from '../transaction/transactions_chart_container'
import News from '../company/news_container';
import Search from './search';
import Watchlist from '../watchlist/watchlist_container';

class UserSplash extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.homepageRedirect = this.homepageRedirect.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.history.push('/'));
    }

    homepageRedirect(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    componentDidUpdate(prevProps){
        
    }

    render() {
        return (
            <div className="user-container">
                <div className="nav-bar">
                    <button className="nav-logo" onClick={this.homepageRedirect}>
                        <i className="fas fa-money-bill"></i>
                    </button>
                    
                    <Search />
                    
                    <div className="nav-searchbar-links">

                        <div className="personal-links-user">
                            <a href="https://www.linkedin.com/in/ebaek5/">LinkedIn</a>
                            <a href="https://github.com/ebaek">Github</a>
                            <button onClick={this.handleLogout} className="signout-button">Sign Out</button>                            
                        </div>
                    </div>

                </div>

                <div className="chart-show">
                    <div className="body-info">
                        <TransactionsChart />
                        <News />
                    </div>
                </div>
                
                <Watchlist />

            </div>
        )
    }
}

export default withRouter(UserSplash);