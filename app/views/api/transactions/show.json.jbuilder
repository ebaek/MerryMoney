json.extract! @transaction, :id, :user_id, :purchase_price, :quantity, :buy, :created_at
json.ticker @transaction.company.ticker 

