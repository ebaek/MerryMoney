import React from 'react';

class TransactionsChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {transactions: [], portValues: {}, companyPrices: []};
    }

    componentDidMount() {
        this.props.fetchTransactions().then( (res) => this.setState(res));
    }

    chartData(timeframe, interval) {
        const {transactions} = this.state;
        let newPortValues = {};

        transactions.forEach( (transaction) => {
            this.props.fetchCompanyHistoricPrices(transaction.ticker, timeframe, interval)
                .then( (res) => {
                    const companyPrices = Object.assign([], res.prices);
                    companyPrices.forEach((price) => {
                        const priceTime = new Date(price.date);
                        const transactionTime = new Date(transaction.created_at);

                        if (this.priceWithinDayRange(priceTime, transactionTime)) {                          
                            if(newPortValues[price.date] === undefined) {
                                newPortValues[price.date] = 0;
                            }
                            debugger
                            if (transaction.buy) {
                                // add the portfolio value of specified date by closing price * quantity
                                newPortValues[price.date] += (transaction.quantity * price.close);
                            } else {
                                newPortValues[price.date] -= (transaction.quantity * price.close);
                            }
                        }
                    })
                });
        })
        
        return newPortValues;
    }

    // priceWithinMonthRange(priceTime, transactionTime, monthRange){
    //     const priceMonth = priceTime.getMonth();
    //     const priceYear = priceTime.getYear();

    //     const month = transactionTime.getMonth();
    //     const year = transactionTime.getYear();

    //     if(priceYear === year) {
    //         return priceMonth - month <= monthRange ? true : false;
    //     } else if (year - priceYear === 1) {
    //         const newPriceMonth = priceMonth + 12;
    //         return newPriceMonth - month <= monthRange ? true : false; 
    //     }

    //     return false;
    // }

    priceWithinDayRange(priceTime, transactionTime){
        let priceMonth = priceTime.getMonth();
        let priceDate = priceTime.getDate() + 1;
        let priceYear = priceTime.getYear();

        const month = transactionTime.getMonth();
        const date = transactionTime.getDate();
        const year = transactionTime.getYear();

        // if(priceYear === year) {
        //     if(priceMonth === month) {
        //         return date <= priceDate + dayRange ? true : false;
        //     }
        // } else if (year - priceYear === 1) {
            
        //     return date <= priceDate + dayRange - 31 ? true : false;
        // }

        debugger
        if (priceTime >= transactionTime || priceYear === year && priceMonth === month && priceDate === date) {
            return true;
        } else {
            return false;
        }

    }

    render(){
        this.chartData("5d", "1");
        debugger
        return(
            <div>
                <p>pineapple</p>      
            </div>
        );
    }
}


export default TransactionsChart;