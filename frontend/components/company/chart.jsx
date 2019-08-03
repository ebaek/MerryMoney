import React from 'react';
import { withRouter } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            prices: [],
            yrDate: [],
            hoverPrice: 0,
            hoverXPosition: 0,
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
        this.setState({ hoverPrice: e.activePayload[0].payload.uClose });
        this.setState({ hoverXPosition: e.activeCoordinate.x });
    }

    render() {
        return (
            <div className="chart-container">
                <h1>{this.state.name}</h1>
                <p>{this.state.hoverPrice}</p>

                <ResponsiveContainer width='100%' aspect={7 / 4.0}>
                    
                    <LineChart className="linechart" data={this.state.yrDate} 
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }} onMouseMove={this.hoverPrice}>

                    <Line type="monotone" dataKey="uClose" stroke="#21CE99" 
                        strokeWidth={2} dot={false} />

                    <XAxis dataKey="date" hide={true} />

                    <Tooltip className='tooltip' content={this.state.yrDate.date}
                            contentStyle={{ border: '0', backgroundColor: 'transparent' }} 
                            formatter={(value, name, props) => {return [""] } } 
                            position={{x: this.state.hoverXPosition - 20, y: -25}}
                            isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5}}
                            />
                            </LineChart>
                            </ResponsiveContainer>
                            </div>
                            );
                        }
                    }
                    
                    export default withRouter(Chart);
                    
                    // position={{ x: event.clientX, y: -15}}