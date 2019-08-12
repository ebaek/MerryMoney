import React from 'react';
import { fetchRecentPrice } from '../../util/company_api_util'
import NumberFormat from 'react-number-format';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            watchlistItems: [],
        }
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

    itemsLi() {
        const items = this.state.watchlistItems.map( (item, idx) => {
            return(
                <li className="watchlist-item" key={idx}>
                    <p>{item[0]}</p>
                    <div className="watchlist-item-priceinfo">
                    <p>${item[1]}</p>
                    <p>{item[2]}</p>
                    </div>
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

export default Watchlist;