import React from 'react';
import { withRouter } from 'react-router-dom';

class CompanyBlurb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company_data: {}, stats: {}, quote: {}};
    }

    componentDidMount() {
        const ticker = this.props.ticker;
        this.props.fetchCompanyBasics(ticker).then(res => this.setState(res));
        this.props.fetchCompanyKeyStats(ticker).then(res => this.setState(res));
        this.props.fetchCompanyQuote(ticker).then(res => this.setState(res));
    }

    render() {
        const { company_data } = this.state; 
        const { stats } = this.state; 
        const { quote } = this.state;

        return (
            <div className="about-container">
                <h2>About</h2>

                <div className="about-blurb">
                    <p>{company_data.description}</p>
                </div>
            
                <div className="about-snippets">
                    <div>
                        <h4>CEO</h4>
                        <p>{company_data.CEO}</p>
                    </div>
            
                    <div>
                        <h4>Employees</h4>
                        <p>{company_data.employees}</p>
                    </div>
            
                    <div>
                        <h4>Industry</h4>
                        <p>{company_data.industry}</p>
                    </div>
            
                    <div>
                        <h4>Exchange</h4>
                        <p>{company_data.exchange}</p>
                    </div>
            
                    <div>
                        <h4>Market Cap</h4>
                        <p>{quote.marketCap}</p>
                    </div>

                    <div>
                        <h4>Price-Earnings Ratio</h4>
                        <p>{quote.peRatio}</p>
                    </div>

                    <div>
                        <h4>Dividend Yield</h4>
                        <p>{stats.dividendYield}</p>
                    </div>

                    <div>
                        <h4>Avg. 30 Day Volume</h4>
                        <p>{stats.dividendYield}</p>
                    </div>

                    <div>
                        <h4>Avg. Total Volume</h4>
                        <p>{quote.avgTotalVolume}</p>
                    </div>

                    <div>
                        <h4>52 Week High</h4>
                        <p>{quote.week52High}</p>
                    </div>

                    <div>
                        <h4>52 Week Low</h4>
                        <p>{quote.week52Low}</p>
                    </div>

                </div>

            </div>
        )
    }

}

export default withRouter(CompanyBlurb);
