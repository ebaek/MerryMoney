import React from 'react';
import { withRouter } from 'react-router-dom';

class BuySell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buy: true,
            quantity: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.buySellSwitch = this.buySellSwitch.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const transaction = {
            buy: this.state.buy,
            purchase_price: this.props.mostRecentPrice.average,
            quantity: this.state.quantity,
            ticker: this.props.match.params.ticker,
        }

        if (this.validTransaction(transaction)) {
            this.props.createTransaction(transaction);
        } else {
            console.log("invalid transaction");
        }
    }

    // renderErrors() {
    //     const icon = (this.props.errors.length === 0) ? null : (<i className="fas fa-exclamation-circle"></i>);

    //     return (
    //         <div className="invalid-credentials">
    //             {icon}
    //             {this.props.errors.map((error) => (
    //                 <p key={`error-${error.index}`}>{error}</p>
    //             ))}
    //         </div>
    //     );
    // }

    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    buySellSwitch(purchase) {
        if(purchase === "buy") {
            this.setState({"buy": true});
        } else {
            this.setState({ "buy": false });
        }
    }

    numShares() {
        const ticker = this.props.match.params.ticker;
        let numShares = 0;
        
        let transactionsArr = Object.values(this.props.transactions)
        for (let i = 0; i < transactionsArr.length; i++) {
            let transaction = transactionsArr[i];
            debugger
            if(transaction["user_id"] === this.props.user_id && transaction["ticker"] === ticker) {
                if (transaction["buy"] === true) {
                    numShares = numShares + 1;
                } else { 
                    numShares = numShares - 1;
                }
            }
        }

        return numShares;
    }

    validTransaction(transaction) {
        if(transaction["buy"]) {
            return this.props.balance >= transaction["purchase_price"] * transaction["quantity"] ? true : false;
        } else {
            return this.numShares() >= transaction["quantity"] ? true : false;
        }
    }

    render() {
        const mostRecentPrice = this.props.mostRecentPrice.average || '';
        const mostRecentCost = this.props.mostRecentPrice.average * this.state.quantity || '';
        const portValue = this.props.user_port_val;
        const balance = this.props.balance;

        return(
            <div className="buy-sell-info">

                <div className="buy-sell-but">
                    <button onClick={() => this.buySellSwitch("buy")}>{"Buy " + this.props.match.params.ticker}</button>
                    <button onClick={() => this.buySellSwitch("sell")}>{"Sell " + this.props.match.params.ticker}</button>
                </div>

                <form className="bs-form" onSubmit={this.handleSubmit}>
                    <div className="shares">
                        <label>Shares</label>
                        <input type="number" 
                            min="0" 
                            step="1"
                            onChange={this.update('quantity')}
                            required
                            />
                    </div>

                    <div className="market-price">
                        <label>Market Price</label>
                        <label>${Math.round(mostRecentPrice * 100) / 100}</label>
                    </div>

                    <div className="estimated-cost">
                        <label>Estimated Cost</label>
                        <label>${Math.round(mostRecentCost * 100) / 100}</label>
                    </div>
                    
                    <input className="review-order" type="submit" value="Review Order" />

                    <div className="buying-power">
                        <label>${Math.round(balance * 100) / 100} Buying Power Available</label>
                    </div>

                </form>
            </div>
        );
    }
}

export default withRouter(BuySell);