import React from 'react';
import { withRouter } from 'react-router-dom';

class CompanyBlurb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company_data: {}};
    }

    componentDidMount() {
        const ticker = this.props.ticker;
        this.props.fetchCompanyBasics(ticker).then(res => this.setState(res));
    }

    render() {
        const { company_data } = this.state; 

        return (
            <div className="about-container">
                <h2>About</h2>
                <div className="about-blurb">
                    <p>{company_data.description}</p>
                </div>

                <div className="about-snippets">
                    <div>
                        <h4>CEO</h4>
                        <p>{company_data.CEO}</p>
                    </div>

                    <div>
                        <h4>Employees</h4>
                        <p>{company_data.employees}</p>
                    </div>

                    <div>
                        <h4>Industry</h4>
                        <p>{company_data.industry}</p>
                    </div>

                    <div>
                        <h4>Exchange</h4>
                        <p>{company_data.exchange}</p>
                    </div>


                    <div className="about-row-3">
                    </div>
                </div>
            </div>
        )

    }

}

export default withRouter(CompanyBlurb);