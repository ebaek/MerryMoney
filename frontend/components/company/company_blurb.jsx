import React from 'react';
import { withRouter } from 'react-router-dom';

class CompanyBlurb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company_basics: {}};
    }

    componentDidMount() {
        const ticker = this.props.ticker;
        this.props.fetchCompanyBasics(ticker).then(res => this.setState(res));
        this.props.fetchCompanyKeyStats(ticker).then(res => this.setState(res));
    }

    render() {
        const { company_basics } = this.state; 


        return (
            <div className="about-container">

            </div>
        )

    }

}

export default withRouter(CompanyBlurb);

// <h2>About</h2>
//     <div className="about-blurb">
//         <p>{company_basics.description}</p>
//     </div>

//     <div className="about-snippets">
//         <div>
//             <h4>CEO</h4>
//             <p>{company_basics.CEO}</p>
//         </div>

//         <div>
//             <h4>Employees</h4>
//             <p>{company_basics.employees}</p>
//         </div>

//         <div>
//             <h4>Industry</h4>
//             <p>{company_basics.industry}</p>
//         </div>

//         <div>
//             <h4>Exchange</h4>
//             <p>{company_basics.exchange}</p>
//         </div>

//         <div className="about-row-3">
//         </div>
//     </div>