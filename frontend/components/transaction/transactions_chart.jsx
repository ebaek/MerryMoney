import React from 'react';

class TransactionsChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {transactions: []};
    }

    componentDidMount() {
        this.props.fetchTransactions().then( (res) => this.setState(res));
    }

    chartData(timeframe) {
        const chartHash = {};
        const {transactions} = this.state;
   
    }

    calculatePortVal() {
    }

    render(){
        return(
            <div>
                <p>pineapple</p>      
            </div>
        );
    }
}


export default TransactionsChart;