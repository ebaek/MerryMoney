class EditTransactionsCompany < ActiveRecord::Migration[5.2]
  def change
    remove_index :transactions, :company_id
    remove_column :transactions, :company_id

    add_column :transactions, :company_id, :integer, null: false
    add_index :transactions, :company_id
  end
end
