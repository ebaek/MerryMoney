json.extract! @transaction, :id, :user_id, :purchase_price, :quantity, :buy
json.ticker @transaction.company.ticker 

