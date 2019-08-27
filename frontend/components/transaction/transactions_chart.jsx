import React from 'react';
import NumberFormat from 'react-number-format';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Odometer from 'react-odometerjs';
import { withRouter } from 'react-router-dom';

class TransactionsChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverPrice: 0,
            hoverXPosition: "",
            change: 0,
            changeOverTime: 0,
            oneDayPrices: "",
            oneWeekPrices: "",
            oneMonthPrices: "",
            threeMonthPrices: "",
            fiveYrPrices: "",
            currentChart: "oneDayPrices",
        };

        this.portfolioData = this.portfolioData.bind(this);
        this.reformatPortData = this.reformatPortData.bind(this);
        this.fetchDates = this.fetchDates.bind(this);
        this.hoverPrice = this.hoverPrice.bind(this);
        this.formatDayDate = this.formatDayDate.bind(this);
    }

    componentDidMount() {
        this.portfolioData("1d", "15", "oneDayPrices");
    }

    portfolioData(timeframe, interval, label) {
        const transactions = this.props.transactions;
        let newPortValues = {};

        Promise.all(transactions.map( (transaction) => {
            return this.props.fetchCompanyHistoricPrices(transaction.ticker, timeframe, interval)
                .then( (res) => {
                    const companyPrices = Object.assign([], res.prices);
                    companyPrices.forEach((price) => {
                        const priceTime = new Date(this.convertDateObjParams(price));
                        const transactionTime = new Date(transaction.created_at);

                        if(transactionTime <= priceTime) {  
                            const date = timeframe === "1d" ? price.label : this.formatDayDate(price.date) 

                            if(newPortValues[date] === undefined) newPortValues[date] = 0;

                            if (transaction.buy) {
                                newPortValues[date] += (transaction.quantity * price.close);
                            } else {
                                newPortValues[date] -= (transaction.quantity * price.close);
                            }
                        }
                    });
                });
            })).then( () => {
                const portData = this.reformatPortData(newPortValues);
                this.setState({ 
                    [label]: portData,
                    currentChart: label,
                    hoverPrice: portData[portData.length - 1].value,
                });
            });
    }

    formatDayDate(date) {
        let dateObj = new Date(date);
        let newDate = dateObj.toDateString().split(" ");
        
        newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3];
        return newDate;
    }

    convertDateObjParams(price) {
        if(price.minute){
            return price.date + " " + price.label;
        } else {
            return price.date;
        }
    }

    reformatPortData(newPortValues){
        const chartData = [];
        for(let i = 0; i < Object.keys(newPortValues).length; i++) {
            chartData.push( {time: Object.keys(newPortValues)[i], value: Object.values(newPortValues)[i]} );
        }
        return chartData;
    }

    fetchDates(timeframe, interval, label) {
        if(this.state[label] === "") {
            this.portfolioData(timeframe, interval, label);
        } else {
            const lastPrices = this.state[label];
            this.setState({
                currentChart: label,
                hoverPrice: lastPrices[lastPrices.length - 1],
            });
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
            const change = this.portChange(e.activePayload[0].payload.time);

            this.setState({ 
                hoverPrice: hoverClose,
                hoverXPosition: e.activeCoordinate.x,
                change: change["dollarChange"],
                changeOverTime: change["percentChange"],
            });
        }
    }

    portChange(time) {
        const portValues = this.state[this.state.currentChart];

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
        let portValues = this.state[this.state.currentChart] || [];

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

                        <Line type="linear" dataKey="value" stroke="#21CE99"
                            strokeWidth={2} dot={false} />

                        <XAxis dataKey="time" hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />

                        <Tooltip className='tooltip'
                            contentStyle={{ border: '0', backgroundColor: 'transparent' }}
                            formatter={(value, name, props) => { return [""] }}
                            position={{ x: this.state.hoverXPosition - 50, y: -30 }}
                            isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>

                <div className="timeframe-buttons">
                    <button onClick={() => this.fetchDates("1d", "30", "oneDayPrices")}>1D</button>
                    <button onClick={() => this.fetchDates("5d", "1", "oneWeekPrices")}>1W</button>
                    <button onClick={() => this.fetchDates("1m", "1", "oneMonthPrices")}>1M</button>
                    <button onClick={() => this.fetchDates("3m", "1", "threeMonthPrices")}>3M</button>
                    <button onClick={() => this.fetchDates("5y", "10", "fiveYrPrices")}>5Y</button>
                </div>

            </div>
        )}
    }
        
export default withRouter(TransactionsChart);
