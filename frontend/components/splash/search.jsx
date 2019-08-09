import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchCompanies } from '../../util/company_api_util';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input_val: "",
            companies: [],
        }

        this.handleInput = this.handleInput.bind(this);
        this.redirectCompanyPage = this.redirectCompanyPage.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.ticker !== prevProps.match.params.ticker) {
            fetchCompanies().then(companies => this.setState({
                companies: companies,
            }))

            this.setState({
                input_val: "",
            })
        }
    }

    handleInput(e) {
        this.setState({
            input_val: e.target.value
        })
    }

    componentDidMount() {
        fetchCompanies().then( companies => this.setState({
            companies: companies,
        }))
    }

    redirectCompanyPage(ticker) {
        this.props.history.push(`/${ticker}`);
    }

    match() {
        const results = [];
        let companies = Object.values(this.state.companies) || [];
        let input_val = this.state.input_val.toLowerCase() || "";
        
        if(input_val === "") return null;

        if(companies) {
            for(let i = 0; i < companies.length; i++) {
                let company_name = companies[i].name.slice(0, input_val.length).toLowerCase();
                let company_ticker = companies[i].ticker.slice(0, input_val.length).toLowerCase();

                if(company_name === input_val || company_ticker === input_val) {
                    results.push([companies[i].ticker, companies[i].name]);
                }

                if(results.length === 6) return results;
            }

            if(results.length === 0) results.push["We were unable to find any results for your search."];

            return results;
        }
    }

    matchListItems(){
        let searchResults = this.match();
        let searchLi = "";

        if (searchResults) {
            searchLi = searchResults.map( (result) => {
                return(<li key={result[0]} onClick={() => this.redirectCompanyPage(result[0])}>
                    <div className="search-result">
                        <div className="ticker-search">{result[0]}</div>
                        <div className="company-name-search">{result[1]}</div>
                    </div>
                </li>);
            });
        }

        return (
            <ul>
                { searchLi }
            </ul>
        );
    }

    render() {
        return(
            <div className="search-container">
                <input className="nav-search" 
                    type="text" placeholder="Search" 
                    onChange={this.handleInput} 
                    value={this.state.input_val} />
                {this.matchListItems()}
            </div>
        );
    }
}   

export default withRouter(Search);