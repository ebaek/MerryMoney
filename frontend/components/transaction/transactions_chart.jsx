import React from 'react';

class TransactionsChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {transactions: [], portValues: {}, companyPrices: []};
    }

    componentDidMount() {
        this.props.fetchTransactions().then( (res) => this.setState(res));
    }

    // iterate through all of the transactions
    // fetchCompany historic prices 
    // find key in hash with fetchCompany date 
    // value of hash is + (quantity * price from fetchCompany) or - (quantity * price from fetchCompany)
    // pass up the hash to recharts 

    //array of tickers
    //dates
    //only fetch dates

    chartData(timeframe, interval) {
        const {transactions} = this.state;
        
        debugger
        transactions.forEach( (transaction) => {
            let companyPrices = [];
            
            // this is return an empty array for the companyPrices state for some reason 
            this.props.fetchCompanyClosePrices(transaction.ticker, timeframe, interval)
                .then( (res) => {
                    debugger
                    return this.setState({companyPrices: res.prices})
                });

            let transactionInfo = new Date(transaction.created_at);


            let month = transactionInfo.getMonth();
            let date = transactionInfo.getDate();
            let year = transactionInfo.getYear();
            // let time = transactionInfo[4];

            //let transactionDate = month + " " + date + ", " + year;
            
            this.state.companyPrices.forEach( (price) => {
                debugger
                let priceInfo = new Date(price.date);
                let priceMonth = priceInfo.getMonth();
                let priceDate = priceInfo.getDate();
                let priceYear = priceInfo.getYear();

                if( priceYear === year && priceMonth === month ) {
                    // check if the transaction date is within the specified interval
                    // if (date >= priceDate && date < priceDate + interval) {

                        // IMPORTANT**
                        // might have issues because hash doesn't have initialized 0
                        if(transaction.buy) {
                            // add the portfolio value of specified date by closing price * quantity
                            this.state.portValues[price.date] += (transaction.quantity * price.close);
                        } else {
                            this.state.portValues[price.date] -= (transaction.quantity * price.close);
                        }
                    }
                // }
            })
        })
        return this.state.portValues;
    }

    calculatePortVal() {
    }

    render(){
        debugger
        this.chartData("5y", "150");

        return(
            <div>
                <p>pineapple</p>      
            </div>
        );
    }
}


export default TransactionsChart;