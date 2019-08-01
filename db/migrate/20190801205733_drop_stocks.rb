class DropStocks < ActiveRecord::Migration[5.2]
  def change
    drop_table :stocks
  end
end
