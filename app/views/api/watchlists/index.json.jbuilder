json.array! @watchlist_items do |watchlist_item|
    watchlist_item.id do 
        json.id watchlist_item.id
        json.user_id watchlist_item.user_id
        json.company_id watchlist_item.company_id
    end
end