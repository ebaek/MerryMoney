# == Schema Information
#
# Table name: transactions
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  purchase_price :float            not null
#  quantity       :integer          not null
#  buy            :boolean          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  ticker         :string           not null
#


class Transaction < ApplicationRecord
    validates :user_id, :ticker, :purchase_price, :quantity, presence: true
    validates :buy, inclusion: { in: [true, false] }

    belongs_to :user

    belongs_to :company,
    primary_key: :ticker,
    foreign_key: :ticker,
    class_name: "Company"
end
