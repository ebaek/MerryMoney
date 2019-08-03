import React from 'react';
import { withRouter } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {prices: []};
    }

    componentDidMount() {
        this.ticker = this.props.ticker;
        this.props.fetchCompanyHistoricPrices(this.ticker, "5y", "5").then( (res) => this.setState(res));
    }

    render() {
        const prices = this.state.prices;

        return (
            <div className="chart-container">
                <LineChart width={600} height={300} data={prices} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uClose" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        );
    }
}

export default withRouter(Chart);