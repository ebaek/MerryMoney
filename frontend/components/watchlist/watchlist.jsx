import React from 'react';
import { fetchMostRecentPrice } from '../../util/company_api_util'
import { withRouter } from 'react-router-dom';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItems: [],
            watchlistItems: [],
        }
        this.redirectCompanyPage = this.redirectCompanyPage.bind(this);
    }

    componentDidMount() {
        const prices = [];
        const watchlistTickers = [];

        const portfolio = this.transactions();
        const portItems = []

        this.props.fetchWatchlist().then( (items) => {
            Object.values(items)[1].forEach( (item) => {
                watchlistTickers.push(item["company_id"]);
            })

            Promise.all( watchlistTickers.map( (company) => {
                return fetchMostRecentPrice(company).then( (price) => {
                    prices.push([company, price[0].close, price[0].changeOverTime]);
                })
            })).then( () => {
                this.setState({
                    watchlistItems: prices,
                })
            })

            Promise.all( portfolio.map( (position) => {
                return fetchMostRecentPrice(position[0]).then((price) => {
                    portItems.push([position[0], position[1], price]);
                })
            })).then(() => {
                this.setState({
                    portfolioItems: portItems,
                })
            })

        })
    }

    transactions() {
        const transactionCount = this.transactionsHelper();
        const transactions = [];

        Object.keys(transactionCount).forEach( (ticker) => {
            if( transactionCount[ticker] > 0 ) {
                transactions.push([ticker, transactionCount[ticker]]);
            }
        })

        return transactions;
    }

    transactionsHelper() {
        const positions = {};

        this.props.transactions.forEach((transaction) => {
            if (positions[transaction.ticker] === undefined) positions[transaction.ticker] = 0;

            if (transaction.buy) {
                positions[transaction.ticker] += transaction.quantity;
            } else {
                positions[transaction.ticker] -= transaction.quantity;
            }
        });

        return positions;
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
        debugger
        return (
            <div className="sidebar">
                <h3 className="sidebar-header">Portfolio</h3>

                <h3 className="sidebar-header">Watchlist</h3>
                <ul className="watchlist-items">
                    {this.itemsLi()}
                </ul>
            </div>
        )
    };
}

export default withRouter(Watchlist);