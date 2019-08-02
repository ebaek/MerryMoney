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

export const createCompany = company => {
    $.ajax({
        method: 'POST',
        url: 'api/companies',
        data: { company: company },
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


