import React from 'react';
import { withRouter } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class CompanyBlurb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company_data: {}, stats: {}, quote: {}};
    }

    componentDidMount() {
        const ticker = this.props.ticker;
        this.props.fetchCompanyBasics(ticker).then(res => this.setState(res));
        this.props.fetchCompanyQuote(ticker).then(res => this.setState(res));
    }

    formatNumber(num) {
        if(num >= 1000000 && num < 10000000) {
            return <NumberFormat value={num} displayType={'text'} format="#.##M" />
        } else if (num >= 10000000 && num < 100000000) {
            return <NumberFormat value={num} displayType={'text'} format="##.##M" />
        } else if (num >= 100000000 && num < 1000000000) {
            return <NumberFormat value={num} displayType={'text'} format="###.##M" />
        } else if (num >= 1000000000 && num < 10000000000 ) {
            return <NumberFormat value={num} displayType={'text'} format="#.##B" />
        } else if (num >= 10000000000 && num < 100000000000) {
            return <NumberFormat value={num} displayType={'text'} format="##.##B" />
        } else if (num >= 100000000000 && num < 1000000000000) {
            return <NumberFormat value={num} displayType={'text'} format="###B" />
        } else if (num >= 1000000000000 && num < 10000000000000) {
            return <NumberFormat value={num} displayType={'text'} format="#.##T" />
        }
    }

    render() {
        const { company_data } = this.state; 
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
                        <p><NumberFormat value={company_data.employees} displayType={'text'} thousandSeparator={true} /></p>
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
                        <p>{this.formatNumber(quote.marketCap)}</p>
                    </div>

                    <div>
                        <h4>Price-Earnings Ratio</h4>
                        <p><NumberFormat value={quote.peRatio} displayType={'text'} format="#####" /></p>
                    </div>

                    <div>
                        <h4>High Today</h4>
                        <p>{quote.high}</p>
                    </div>

                    <div>
                        <h4>Low Today</h4>
                        <p>{quote.low}</p>
                    </div>

                    <div>
                        <h4>Volume</h4>
                        <p>{this.formatNumber(quote.volume)}</p>
                    </div>

                    <div>
                        <h4>Avg. Total Volume</h4>
                        <p>{this.formatNumber(quote.avgTotalVolume)}</p>
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
