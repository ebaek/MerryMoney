class DropPortfolios < ActiveRecord::Migration[5.2]
  def change
    drop_table :portfolios
  end
end
