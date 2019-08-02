export const fetchCompany = id => {
    return $.ajax({
        method: 'GET',
        url: `api/companies/${id}`,
    })
}

export const fetchCompanyBasics = (ticker) => {
    return $.ajax({
        method: 'GET',
        url: `/stock/${ticker}/company`,
    })
}