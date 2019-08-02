class DropCompaniesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :companies, :companies
  end
end
