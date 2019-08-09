json.(user, :id, :email, :first_name, :last_name, :balance, :portfolio_value)

json.transactions user.transactions do |transaction|
    json.(transaction, :buy, :ticker, :quantity, :purchase_price, :created_at)
end



