const NewsAPI = require('newsapi');

export const fetchCompanyNews = (company) => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${company}&domains=wsj.com,ft.com,marketwatch.com,financialpost.com,cnbc.com,bloomberg.com&sortBy=publishedAt&apiKey=${window.newsAPIKey}`
    })
}







