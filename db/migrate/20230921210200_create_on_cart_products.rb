class CreateOnCartProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :on_cart_products do |t|
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end
