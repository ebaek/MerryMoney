class AddBalanceColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :balance, :float, null: false, default: 0
    add_index :users, :balance
  end
end
