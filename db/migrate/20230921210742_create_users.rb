class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :shipping_address
      t.integer :phone_number1
      t.integer :phone_number2

      t.timestamps
    end
  end
end
