export const fetchCompany = id => {
    return $.ajax({
        method: 'GET',
        url: `api/companies/${id}`,
    })
}

export const fetchCompanyBasics = (ticker) => {
    return $.ajax({
        method: 'GET',
        //add token here
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/batch?&types=quote&token=`,
    })
}