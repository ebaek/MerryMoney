import React from 'react';
import { withRouter } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import NumberFormat from 'react-number-format';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            prices: [],
            yrDate: [],
            change: 0,
            changePercent: 0,
            hoverPrice: 0,
            hoverXPosition: "",
        };

        this.hoverPrice = this.hoverPrice.bind(this);
    }

    componentDidMount() {
        this.ticker = this.props.ticker;
        this.props.fetchCompanyHistoricPrices(this.ticker, "5y", "5")
            .then( (res) => {
                this.setState({
                    data: res,
                    yrDate: this.convertDateYrs(res.prices),
                });
            });
        this.props.fetchCompanyKeyStats(this.ticker).then( (res) => {
            this.setState({
                name: res.stats.companyName,
            })
        })
    }

    convertDateYrs(prices) {
        prices.forEach( (price, idx) => {
            prices[idx]["date"] = this.formatDayDate(price["date"]);
        })
        return prices;
    }

    formatDayDate(date){
        let dateObj = new Date(date);
        let newDate = dateObj.toDateString().split(" ");

        newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3];
        return newDate;
    }

    hoverPrice(e){
        if (e.isTooltipActive !== false) {
            this.setState({ hoverPrice: e.activePayload[0].payload.uClose });
            this.setState({ hoverXPosition: e.activeCoordinate.x });
            this.setState({ change: e.activePayload[0].payload.change });
            this.setState({ changeOverTime: e.activePayload[0].payload.changeOverTime });
        }
    }

    formatPercent(decimal) {
        if(decimal === 0) return "";

        return <NumberFormat value={decimal * 100} displayType={'text'} format="(####%)" />
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
        return (
            <div className="chart-container">
                <div className="name-price">
                    <h1>{this.state.name}</h1>

                    <div className="price-info">
                        <div className="price">
                            <h1>$</h1><div id="odometer" className="odometer">{this.state.hoverPrice}</div>
                            </div>
                        <div className="price-change">
                            <h3>{this.formatPriceChange(this.state.change)}</h3>
                            <h3>{this.formatPercent(this.state.changeOverTime)}</h3>
                        </div>
                    </div>
                </div>

                <ResponsiveContainer width='100%' aspect={7 / 2.0}>
                    
                    <LineChart className="linechart" data={this.state.yrDate} 
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }} onMouseMove={this.hoverPrice}>

                    <Line type="monotone" dataKey="uClose" stroke="#21CE99" 
                        strokeWidth={2} dot={false} />

                    <XAxis dataKey="date" hide={true} />

                    <Tooltip className='tooltip' content={this.state.yrDate.date}
                            contentStyle={{ border: '0', backgroundColor: 'transparent' }} 
                            formatter={(value, name, props) => {return [""] } } 
                            position={{x: this.state.hoverXPosition - 50, y: -25}}
                            isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5}}
                            />
                            </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
                    

export default withRouter(Chart);
                    
