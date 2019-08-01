class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :companies, :ticker, null: false

      t.timestamps
    end

    add_index :companies, :ticker, unique: true
  end
end
