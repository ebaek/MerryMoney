# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

# clear the database 
User.destroy_all

# demo user 
robert = User.create(email: 'batman34@gmail.com', password: 'watermelon', first_name: 'Robert', last_name: 'Smith')

csv_nasdaq = File.read(Rails.root.join('lib', 'seeds', 'nasdaq.csv'))
csv_nasdaq = CSV.parse(csv_nasdaq, :headers => true, :encoding => 'ISO-8859-1')

csv_nasdaq.each do |row|
  puts row.to_hash
end

# puts csv_nasdaq

