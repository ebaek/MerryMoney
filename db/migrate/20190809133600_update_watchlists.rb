class UpdateWatchlists < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlists, :company_id
    remove_column :watchlists, :company_id

    add_column :watchlists, :ticker, :string, null: false
    add_index :watchlists, :ticker
  end
end
