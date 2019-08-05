json.array! @transactions do |transaction|
    json.id transaction.id
    json.user_id transaction.user_id
    json.company_id transaction.company_id
    json.purchase_price transaction.purchase_price
    json.quantity transaction.quantity
    json.buy transaction.buy
    json.created_at transaction.created_at
end