class UpdateTransactionTicker < ActiveRecord::Migration[5.2]
  def change
    remove_index :transactions, :company_id
    remove_column :transactions, :company_id

    add_column :transactions, :ticker, :string, null: false
    add_index :transactions, :ticker
  end
end
