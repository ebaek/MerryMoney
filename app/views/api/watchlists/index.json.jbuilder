@watchlist_items.each do |watchlist_item|
    json.set! watchlist_item.id do 
        json.id watchlist_item.id
        json.user_id watchlist_item.user_id
        json.company_id watchlist_item.ticker
    end
end