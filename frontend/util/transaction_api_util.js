
export const fetchTransactions = () => {
    return $.ajax({
        method: "GET",
        url: "api/transactions"
    })
}

export const createTransaction = (transaction) => {
    return $.ajax({
        method: "POST",
        url: "api/transactions",
        data: {transaction},
    })
}