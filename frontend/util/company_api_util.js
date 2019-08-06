export const fetchCompany = ticker => {
    return $.ajax({
        method: 'GET',
        url: `api/companies/${ticker}`,
    })
}

export const fetchCompanies = () => {
    return $.ajax({
        method: 'GET',
        url: `api/companies`,
    })
};

export const fetchCompanyBasics = (ticker) => {
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/batch?&types=quote&token=${window.iexAPIKey}`,
    })
}

export const fetchCompanyKeyStats = (ticker) => {
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/stats/batch?&types=quote&token=${window.iexAPIKey}`,
    })
}

export const fetchCompanyQuote = (ticker) => {
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote/batch?&types=quote&token=${window.iexAPIKey}`,
    })
}

export const fetchCompanyHistoricPrices = (ticker, range, interval) => {
    return $.ajax({
        method: "GET",
        // url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${range}/?chartInterval=${interval}&types=quote&token=${window.iexAPIKey}`,
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${range}/?filter=date,close,label,change,changeOverTime&chartInterval=${interval}&types=quote&token=${window.iexAPIKey}`,
    });
}

export const fetchCompanyClosePrices = (ticker, range, interval) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/?chartCloseOnly=true&filter=date,close&chartInterval=${filter}&types=quote&token=${window.iexAPIKey}`
    })
}




