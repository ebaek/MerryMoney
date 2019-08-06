import React from 'react';
import { withRouter } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import NumberFormat from 'react-number-format';
import Odometer from 'react-odometerjs';


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
            currentChart: "fiveYrPrices",
        };

        this.hoverPrice = this.hoverPrice.bind(this);
        this.fetchDates = this.fetchDates.bind(this);
    }

    componentDidMount() {
        this.ticker = this.props.ticker;
        this.props.fetchCompanyHistoricPrices(this.ticker, "5y", "360")
            .then( (res) => {
                this.setState({
                    data: res,
                    fiveYrPrices: this.convertDateYrs(res.prices),
                });
            });
        
        this.props.fetchCompanyKeyStats(this.ticker).then( (res) => {
            this.setState({
                name: res.stats.companyName,
            })
        })
    }

    fetchDates(interval, numPoints, label){
        this.ticker = this.props.ticker;

        this.props.fetchCompanyHistoricPrices(this.ticker, interval, numPoints)
            .then((res) => {
                this.setState({
                    data: res,
                    [label]: this.convertDateYrs(res.prices),
                    currentChart: label,
                });
            });
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
        let hoverClose = "";

        if (e.isTooltipActive !== false) {  
            hoverClose = e.activePayload[0].payload.close

            this.setState({ hoverPrice: hoverClose });
            this.setState({ hoverXPosition: e.activeCoordinate.x });
            
            if (e.activePayload[0].payload.change !== undefined) {
                this.setState({ change: e.activePayload[0].payload.change, 
                    changeOverTime: e.activePayload[0].payload.changeOverTime });
            }  
        }
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
        let xAxisLabel = "label";
        
        return (
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

                    <Line type="monotone" dataKey={lineDataKey} stroke="#21CE99" 
                        strokeWidth={2} dot={false} />

                    <XAxis dataKey={xAxisLabel} hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />

                    <Tooltip className='tooltip' 
                            contentStyle={{ border: '0', backgroundColor: 'transparent' }} 
                            formatter={(value, name, props) => {return [""] } } 
                            position={{x: this.state.hoverXPosition - 50, y: -25}}
                            isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5}}
                            />
                            </LineChart>
                </ResponsiveContainer>

                <div className="timeframe-buttons">
                    <button onClick={() => this.fetchDates("1d", "60", "oneDayPrices")}>1D</button>
                    <button onClick={() => this.fetchDates("5d", "1", "oneWeekPrices")}>1W</button>
                    <button onClick={() => this.fetchDates("1m", "1", "oneMonthPrices")}>1M</button>
                    <button onClick={() => this.fetchDates("3m", "30", "threeMonthPrices")}>3M</button>
                    <button onClick={() => this.fetchDates("5y", "360", "fiveYrPrices")}>5Y</button>
                </div>

            </div>
        );
    }
}
                    

export default withRouter(Chart);
                    
