const NewsAPI = require('newsapi');

export const fetchCompanyNews = (company) => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${company}&pageSize=7&apiKey=${window.newsAPIKey}`
    })
};







