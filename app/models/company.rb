# == Schema Information
#
# Table name: companies
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Company < ApplicationRecord
    validates :ticker, presence: true

    # has_many :watchlists

    has_many :transactions

    # has_many :watchers,
    # through: :watchlists,
    # source: :user
end
