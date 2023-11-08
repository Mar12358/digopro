class AddRemovedToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :removed, :boolean, default: false
  end
end
