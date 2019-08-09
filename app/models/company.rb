# == Schema Information
#
# Table name: companies
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Company < ApplicationRecord
    validates :ticker, presence: true

    has_many :watchlists

    has_many :transactions,
    primary_key: :id,
    foreign_key: :ticker,
    class_name: 'Transaction'

    has_many :users,
    through: :watchlists,
    source: :user
end
