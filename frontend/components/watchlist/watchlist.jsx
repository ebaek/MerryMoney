import React from 'react';
import { fetchRecentPrice } from '../../util/company_api_util'
class Watchlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            watchlistItems: this.props.watchlist_items,
        }
    }

    componentDidMount() {
        const prices = [];


        //note to self set the state, need to iterate and resolve all the promises
        //asyncawait
        this.props.fetchWatchlist().then( (items) =>
            Object.values(items)[1].forEach( (item) => {
    
                fetchRecentPrice(item["company_id"]).then( (price) => {
        
                    prices.push([price[0].close, price[0].changeOverTime]);
                })
            })
        ).then(() => {

            this.setState({
                watchlistItems: prices,
            })
        });

    }


    render() {
        return (
            <div className="watchlist">
            </div>
        )
    };
}

export default Watchlist;