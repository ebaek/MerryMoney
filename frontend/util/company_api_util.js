export const fetchCompany = ticker => {
    return $.ajax({
        method: 'GET',
        url: `api/companies/${ticker}`,
    })
};

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
};

export const fetchCompanyKeyStats = (ticker) => {
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/stats/batch?&types=quote&token=${window.iexAPIKey}`,
    })
};

export const fetchCompanyQuote = (ticker) => {
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote/batch?&types=quote&filter=peRatio,high,low,volume,avgTotalVolume,week52High,week52Low&token=${window.iexAPIKey}`
    })
};

export const fetchCompanyHistoricPrices = (ticker, range, interval) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${range}/?filter=date,close,label,change,changeOverTime&chartInterval=${interval}&types=quote&token=${window.iexAPIKey}`,
    });
};

export const fetchMostRecentPrice = (ticker) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/5d/?filter=close,changeOverTime&chartLast=1&token=${window.iexAPIKey}`
    });
};








