import React from 'react';
import { withRouter } from 'react-router-dom';
import CompanyBlurb from './company_blurb_container';
import Chart from './chart_container';
import News from './news_container';
// import BuySell from './buysell_form_container'

class Company extends React.Component {
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

    render() {
        return (
            <div className="user-container">
                <div className="nav-bar">
                    <button className="nav-logo" onClick={this.homepageRedirect}>
                        <i className="fas fa-money-bill"></i>
                    </button>

                    <div className="nav-searchbar-links">
                        <input className="nav-search" type="text" placeholder="Search" />

                        <div className="personal-links-user">
                            <a href="https://www.linkedin.com/in/ebaek5/">LinkedIn</a>
                            <a href="https://github.com/ebaek">Github</a>
                            <button onClick={this.handleLogout} className="signout-button">Sign Out</button>
                        </div>
                    </div>
                </div>

                <div className="chart-show">
                    <div className="body-info">
                        <Chart />
                        <CompanyBlurb />
                        <News />
                    </div>
                </div>

                    
            </div>
        );
    }
}

export default withRouter(Company);

// <div className="buy-sell-info">
//     <BuySell />
// </div>