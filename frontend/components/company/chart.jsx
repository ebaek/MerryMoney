import React from 'react';
import { withRouter } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prices: [],
            yrDate: [],
        };
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

    render() {
        return (
            <div className="chart-container">
                <LineChart width={600} height={300} data={this.state.yrDate} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uClose" stroke="#8884d8" dot={false}/>
                    <XAxis dataKey="date" hide={true} />
                    <Tooltip />
                    </LineChart>
                    </div>
                    );
                }
            }
            
export default withRouter(Chart);
