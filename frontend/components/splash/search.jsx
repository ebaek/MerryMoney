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
                return(<li key={result[0]}>
                    {result[0]}
                    {result[1]}
                </li>);
            });
        }

        return (
            <ul className="nav-search-results">
                { searchLi }
            </ul>
        );
    }

    render() {

        return(
            <div>
                <input className="nav-search" 
                    type="text" placeholder="Search" 
                    onChange={this.handleInput} 
                    value={this.state.inputVal} />

                {this.matchListItems()}
            </div>
        );
    }
}   

export default withRouter(Search);