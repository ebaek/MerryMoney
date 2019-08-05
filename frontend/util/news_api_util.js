const NewsAPI = require('newsapi');

export const fetchCompanyNews = (company) => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${company}&pageSize=5&domains=wsj.com,cnbc.com,bloomberg.com&sortBy=publishedAt&apiKey=${window.newsAPIKey}`
    })
}







