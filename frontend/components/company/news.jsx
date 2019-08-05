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
        this.props.fetchCompanyBasics(ticker).then(res => this.setState(res))
            .then(this.props.fetchNews(ticker).then(res => this.setState(res)));
    }

    formatArticles() {
        let articles = Object.assign([], this.state.news.articles);
        
        return articles.map(article => {
            return(
                <a href={article.url} key={article.title}>
                    <div className="news-box">
                        <div className="news-description">
                            <p className="article-source">{article.source.name}</p>
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