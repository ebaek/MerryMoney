import React from 'react';
import { fetchRecentPrice } from '../../util/company_api_util'
import { withRouter } from 'react-router-dom';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            watchlistItems: [],
        }

        this.redirectCompanyPage = this.redirectCompanyPage.bind(this);
    }

    componentDidMount() {
        const prices = [];
        const tickers = [];

        this.props.fetchWatchlist().then( (items) => {
            Object.values(items)[1].forEach( (item) => {
                tickers.push(item["company_id"]);
            })

            Promise.all( tickers.map( (company) => {
                return fetchRecentPrice(company).then( (price) => {
                    prices.push([company, price[0].close, price[0].changeOverTime]);
                })
            })).then( () => {
                this.setState({
                    watchlistItems: prices,
                })
            })
        })
    }

    formatPercentChange(change) {
        const percentForm = change * 100;
        return percentForm.toFixed(2);
    }

    redirectCompanyPage(ticker) {
        this.props.history.push(`/${ticker}`);
    }

    itemsLi() {
        const items = this.state.watchlistItems.map( (item, idx) => {
            return(
                <li className="watchlist-item" key={idx} onClick={() => this.redirectCompanyPage(item[0])}>
                    <p className="watchlist-item-ticker">{item[0]}</p>
                    <p>${item[1].toLocaleString('en')}</p>
                    <p>{this.formatPercentChange(item[2])}%</p>
                </li>
            );
        })
        return items
    }


    render() {
        return (
            <div className="watchlist">
                <h3 className="watchlist-header">Watchlist</h3>
                <ul className="watchlist-items">
                    {this.itemsLi()}
                </ul>
            </div>
        )
    };
}

export default withRouter(Watchlist);