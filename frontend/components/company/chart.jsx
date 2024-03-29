import React from 'react';
import { withRouter } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import NumberFormat from 'react-number-format';
import Odometer from 'react-odometerjs';
import BuySell from './buysell_form_container';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            prices: [],
            label: [],
            change: 0,
            changeOverTime: 0,
            hoverPrice: 0,
            hoverXPosition: "",
            oneDayPrices: "",
            oneWeekPrices: "",
            oneMonthPrices: "",
            threeMonthPrices: "",
            fiveYrPrices: "",
            currentChart: "oneDayPrices",
            mostRecentPrice: "",
        };

        this.hoverPrice = this.hoverPrice.bind(this);
        this.fetchDates = this.fetchDates.bind(this);
    }

    componentDidMount() {
        this.ticker = this.props.ticker;
        this.props.fetchCompanyHistoricPrices(this.ticker, "1d", "15")
            .then( (res) => {

                const validPrices = res.prices.filter(function (price) {
                    return price.average !== null;
                });

                const hoverLabel = validPrices.length === 0 ? 0 : validPrices[validPrices.length - 1].average;

                this.setState({
                    oneDayPrices: validPrices,
                    mostRecentPrice: validPrices[validPrices.length - 1],
                    hoverPrice: hoverLabel,
                });
            });
        
        this.props.fetchCompanyKeyStats(this.ticker).then( (res) => {
            this.setState({
                name: res.stats.companyName,
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.ticker !== prevProps.match.params.ticker) {
            this.ticker = this.props.ticker;
            this.props.fetchCompanyHistoricPrices(this.ticker, "1d", "15")
                .then((res) => {

                    const validPrices = res.prices.filter(function (price) {
                        return price.average !== null;
                    });

                    this.setState({
                        oneDayPrices: validPrices,
                        mostRecentPrice: validPrices[validPrices.length - 1],
                        hoverPrice: validPrices[validPrices.length - 1].average,
                        oneWeekPrices: "",
                        oneMonthPrices: "",
                        threeMonthPrices: "",
                        fiveYrPrices: "",
                    });
                });

            this.props.fetchCompanyKeyStats(this.ticker).then((res) => {
                this.setState({
                    name: res.stats.companyName,
                })
            })
        }
    }

    fetchDates(interval, numPoints, label){
        this.ticker = this.props.ticker;

        if (this.state[label] === "") {
            this.props.fetchCompanyHistoricPrices(this.ticker, interval, numPoints)
                .then((res) => {
                    let validPrices = 0;
                    let hover = 0;

                    if (interval !== "3m" || interval !== "5y") {
                        validPrices = res.prices.filter(function (price) {
                            return price.close !== null;});
                        hover = validPrices[validPrices.length - 1].close;
                    } else {
                        validPrices = res.prices.filter(function (price) {
                            return price.average !== null;});
                        hover = validPrices[validPrices.length - 1].average;
                    }

                    this.setState({
                        data: validPrices,
                        [label]: this.convertDateYrs(validPrices),
                        currentChart: label,
                        hoverPrice: hover,
                    });

                });
        } else {
            const lastPriceHover = this.state[label];
            let hover = 0;

            if (lastPriceHover.length !== 0) {
                hover = (interval !== "3m" || interval !== "5y") ? 
                    lastPriceHover[lastPriceHover.length - 1].close : lastPriceHover[lastPriceHover.length - 1].average;
            }

            this.setState({
                currentChart: label,
                hoverPrice: hover,
            })
        }
    }

    convertDateYrs(prices) {
        prices.forEach( (price, idx) => {
            prices[idx]["date"] = this.formatDayDate(price["date"]);
        })
        return prices;
    }

    formatDayDate(date) {
        let dateObj = new Date(date);
        let newDate = dateObj.toDateString().split(" ");

        newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3];
        return newDate;
    }

    hoverPrice(e) {
        if (e.isTooltipActive !== false) {
            let hoverClose = e.activePayload[0].payload.close;

            const change = this.compChange(e.activePayload[0].payload.label);

            this.setState({ 
                hoverPrice: hoverClose, 
                hoverXPosition: e.activeCoordinate.x 
            });
            
            if (this.state.currentChart !== "oneDayPrices") {
                this.setState({ 
                    change: e.activePayload[0].payload.change, 
                    changeOverTime: e.activePayload[0].payload.changeOverTime });
            } else {
                this.setState({
                    change: change["dollarChange"],
                    changeOverTime: change["percentChange"],
                });
            }  
        }
    }

    compChange(time) {
        const portValues = this.state[this.state.currentChart];

        for (let idx = 0; idx < portValues.length; idx++) {
            if (portValues[idx].label === time) {
                if (portValues[idx - 1] !== undefined) {
                    return this.calculateChange(portValues[idx - 1].average, portValues[idx].average);
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

    formatPercent(decimal) {
        if(decimal === 0) return "";
        return <NumberFormat value={decimal * 100} displayType={'text'} format="(#####%)" />
    }

    formatPriceChange(price) {
        if (price === 0) return "";
        const newPrice = price.toString().split("")
        if(newPrice[0] === "-") {
            return newPrice[0] + "$" + newPrice.slice(1).join("");
        } else {
            return "+" + "$" + newPrice.slice(0).join("");
        }
    }

    render() {
        let chart = this.state[this.state.currentChart] || [];

        let lineDataKey = "close";
        let xAxisLabel = this.state.currentChart === "oneDayPrices" ? "label" : "date";

        return (
            <div className="chart-form">
                <div className="comp-body">
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
                            <LineChart className="linechart" data={chart}
                                onMouseMove={this.hoverPrice}>

                                <Line type="linear" dataKey={lineDataKey} stroke="#21CE99"
                                    strokeWidth={2} dot={false} />

                                <XAxis dataKey={xAxisLabel} hide={true} />
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
                            <button onClick={() => this.fetchDates("5y", "30", "fiveYrPrices")}>5Y</button>
                        </div>
                    </div>
                </div>
                
                    <BuySell mostRecentPrice={this.state.mostRecentPrice} />

                </div>
                
                );
            }
        }
        
        
export default withRouter(Chart);


        
                    
