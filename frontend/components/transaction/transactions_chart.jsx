import React from 'react';
import NumberFormat from 'react-number-format';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Odometer from 'react-odometerjs';


class TransactionsChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: [], 
            portValues: [],
            hoverPrice: 0,
            hoverXPosition: "",
            change: 0,
            changeOverTime: 0,
        };

        this.portfolioData = this.portfolioData.bind(this);
        this.reformatPortData = this.reformatPortData.bind(this);

        this.hoverPrice = this.hoverPrice.bind(this);
        this.formatDayDate = this.formatDayDate.bind(this);
    }

    componentDidMount() {
        this.props.fetchTransactions().then((res) => this.setState(res, () => {
            this.portfolioData("5d", "1")}));
    }

    portfolioData(timeframe, interval) {
        const {transactions} = this.state;
        let newPortValues = {};

        Promise.all(transactions.map( (transaction) => {
            return this.props.fetchCompanyHistoricPrices(transaction.ticker, timeframe, interval)
                .then( (res) => {
                    const companyPrices = Object.assign([], res.prices);
                    companyPrices.forEach((price) => {
                        const priceTime = new Date(price.date);
                        const transactionTime = new Date(transaction.created_at);

                        if (this.priceWithinDayRange(priceTime, transactionTime)) {  
                            const date = this.formatDayDate(price.date);

                            if(newPortValues[date] === undefined) {
                                newPortValues[date] = 0;
                            }

                            if (transaction.buy) {
                                newPortValues[date] += (transaction.quantity * price.close);
                            } else {
                                newPortValues[date] -= (transaction.quantity * price.close);
                            }
                        }
                    });
                });
            })).then( () => {        
                this.setState({ portValues: this.reformatPortData(newPortValues)});
            });
    }

    formatDayDate(date) {
        let dateObj = new Date(date);
        let newDate = dateObj.toDateString().split(" ");

        newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3];
        return newDate;
    }

    reformatPortData(newPortValues){
        const chartData = [];

        for(let i = 0; i < Object.keys(newPortValues).length; i++) {
            chartData.push( {time: Object.keys(newPortValues)[i], value: Object.values(newPortValues)[i]} );
        }
        return chartData;
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

        if (priceTime >= transactionTime || priceYear === year && priceMonth === month && priceDate === date) {
            return true;
        } else {
            return false;
        }
    }

    formatPriceChange(price) {
        if (price === 0) return "";
        const newPrice = price.toString().split("")
        if (newPrice[0] === "-") {
            return newPrice[0] + "$" + newPrice.slice(1).join("");
        } else {
            return "+" + "$" + newPrice.slice(0).join("");
        }
    }

    formatPercent(decimal) {
        if (decimal === 0) return "";
        return <NumberFormat value={decimal * 100} displayType={'text'} format="(#####%)" />
    }

    hoverPrice(e) {
        let hoverClose = "";

        if (e.isTooltipActive !== false) {
            hoverClose = e.activePayload[0].payload.value;
            debugger
            this.setState({ hoverPrice: hoverClose });
            this.setState({ hoverXPosition: e.activeCoordinate.x });

            const change = this.portChange(e.activePayload[0].payload.time);
            this.setState({
                change: change["dollarChange"],
                changeOverTime: change["percentChange"]
            });
        }
    }

    portChange(time) {
        const { portValues } = this.state;
        for (let idx = 0; idx < portValues.length; idx++) {
            if (portValues[idx].time === time) {
                if (portValues[idx - 1] !== undefined) {
                    return this.calculateChange(portValues[idx - 1].value, portValues[idx].value);
                }
            }
        }
        return { dollarChange: 0, percentChange: 0 }
    }

    calculateChange(first, second) {
        const dollarChange = (second - first).toFixed(2);
        const percentChange = (second - first) / second;

        return { dollarChange: dollarChange, percentChange: percentChange }
    }

    render(){
        const { portValues } = this.state;
        return(
            <div className="chart-container">
                <div className="name-price">
                    <h1>{this.state.name}</h1>

                    <div className="price-info">
                        <div className="price">
                            <p className="dollar-sign">$</p>
                            <Odometer duration={500} value={this.state.hoverPrice} />

                        </div>

                        <div className="price-change">
                            <h3>{this.formatPriceChange(this.state.change)}</h3>
                            <h3>{this.formatPercent(this.state.changeOverTime)}</h3>
                        </div>
                    </div>

                </div>

                <ResponsiveContainer width='100%' aspect={7 / 2.0}>
                    <LineChart className="linechart" data={portValues}
                        onMouseMove={this.hoverPrice}>

                        <Line type="monotone" dataKey="value" stroke="#21CE99"
                            strokeWidth={2} dot={false} />

                        <XAxis dataKey="time" hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />

                        <Tooltip className='tooltip'
                            contentStyle={{ border: '0', backgroundColor: 'transparent' }}
                            formatter={(value, name, props) => { return [""] }}
                            position={{ x: this.state.hoverXPosition - 50, y: -25 }}
                            isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        )}
    }
        
export default TransactionsChart;
