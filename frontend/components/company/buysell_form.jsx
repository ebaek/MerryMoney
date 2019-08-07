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

        this.props.createTransaction(transaction);
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

    render() {

        // const formType = this.state.buy ? "Buy" : "Sell";

        const mostRecentPrice = this.props.mostRecentPrice.average || '';
        const mostRecentCost = this.props.mostRecentPrice.average * this.state.quantity || '';
        const portValue = this.props.user_port_val;

        return(
            <div className="buysell-container">
                <div className="bs-form">

                    <button>{"Buy " + this.props.match.params.ticker}</button>
                    <button>{"Sell " + this.props.match.params.ticker}</button>


                    <form onSubmit={this.handleSubmit}>
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
                            <label>{Math.round(mostRecentCost * 100) / 100}</label>
                        </div>

                        <input type="submit" value="Review Order" />

                        <div className="buying-paper">
                            <label>${portValue} Buying Power Available</label>
                        </div>

                    </form>

                    
                </div>
            </div>
        );
    }
}

export default withRouter(BuySell);