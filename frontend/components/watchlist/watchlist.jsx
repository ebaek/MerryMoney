import React from 'react';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            watchlistItems: this.props.watchlist_items,
        }
    }

    componentDidMount() {
        this.props.fetchWatchlist().then( (items) => {
            this.setState({
                watchlistItems: items,
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