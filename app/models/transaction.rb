# == Schema Information
#
# Table name: transactions
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  company_id     :integer          not null
#  purchase_price :float            not null
#  quantity       :integer          not null
#  buy            :boolean          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#


class Transaction < ApplicationRecord
    validates :user_id, :company_id, :purchase_price, :quantity, :buy, presence: true

    belongs_to :user

    belongs_to :company

end
