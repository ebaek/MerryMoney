class AssignDefaultPortfolioValue < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :portfolio_value
    add_column :users, :portfolio_value, :float, null: false, default: 0
  end
end
