# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ticker     :string           not null
#


class Watchlist < ApplicationRecord
    validates :user_id, :ticker, presence: true

    belongs_to :user

    belongs_to :company,
    primary_key: :ticker,
    foreign_key: :ticker,
    class_name: "Company"
end
