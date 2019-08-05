json.array! @transactions do |transaction|
    json.id transaction.id
    json.user_id transaction.user_id
    json.ticker transaction.ticker
    json.purchase_price transaction.purchase_price
    json.quantity transaction.quantity
    json.buy transaction.buy
    json.created_at transaction.created_at
end