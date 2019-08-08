@companies.each do |company|
    json.set! company.ticker do 
        json.extract! company, :id, :ticker, :name
    end
end