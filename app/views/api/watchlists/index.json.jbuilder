json.array! @watchlist_items do |watchlist_item|
    json.id watchlist_item.id
    json.user_id watchlist_item.user_id
    json.company_id watchlist_item.ticker
end