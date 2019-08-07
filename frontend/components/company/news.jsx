import React from 'react';
import { withRouter } from 'react-router-dom';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {news:[]};

        this.formatArticles = this.formatArticles.bind(this);
    }

    componentDidMount() {
        const ticker = this.props.ticker;
        const page = this.props.match.url;

        this.props.fetchTransactions().then(res => {
            if(page === "/") {
                const companies = this.parsePortCompanies(res.transactions);
                this.props.fetchNews(companies).then(news => this.setState(news));
            } else {
                this.props.fetchNews(ticker).then(news => this.setState(news));
            }
        });
    }

    parsePortCompanies(transactions) {
        let allTransactions = "";
        
        transactions.forEach( (transaction, idx) => {
            if (idx === 0) {
                allTransactions += transaction["ticker"];
            } else {
                allTransactions += "%20OR%20" + transaction["ticker"];
            }
        })

        return allTransactions;
    }

    publicationDate(date) {
        if(date !== undefined) {
            let newDate = new Date(date);
            let now = new Date(Date.now());
            
            if(now.getFullYear() === newDate.getFullYear()) {
                if(now.getMonth() === newDate.getMonth()) {
                    if(now.getDate() === newDate.getDate()) {
                        if(now.getHours() === newDate.getHours()) {
                            if(now.getMinutes() - newDate.getMinutes()) {
                                const diff = now.getSeconds() - newDate.getSeconds();
                                return `${diff}s`
                            } else {
                                const diff = now.getMinutes() - newDate.getMinutes();
                                return `${diff}m`
                            }
                        } else {
                            const diff = now.getHours() - newDate.getHours();
                            return `${diff}h`
                        }
                    } else {
                        const diff = now.getDate() - newDate.getDate();
                        return `${diff}d`
                    }
                } else {
                    const diff = now.getMonth() - newDate.getMonth();
                    return `${diff}m`
                }
            } else {
                const diff = now.getFullYear() - newDate.getFullYear();
                return `${diff}y`
            }
        }

    }

    formatArticles() {
        let articles = Object.assign([], this.state.news.articles);
        
        return articles.map(article => {
            return(
                <a href={article.url} key={article.title}>
                    <div className="news-box">
                        <div className="news-description">
                            <div className="outlet-time">
                                <p className="article-source">{article.source.name}</p>
                                <p className="publication-date">{this.publicationDate(article.publishedAt)}</p>
                            </div>
                            <p className="article-title">{article.title}</p>
                        </div>

                        <div className="news-img-container">
                            <img src={article.urlToImage} />
                        </div>
                    </div>
                </a>
            );
        });
    }

    render() {
        return(
            <div className="news-container">
                <h1>Recent News</h1>
                {this.formatArticles()}
            </div>
        )
    }
}

export default withRouter(News);