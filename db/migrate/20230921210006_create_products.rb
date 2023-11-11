class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.integer :year
      t.boolean :is_presice_year, default: true
      t.decimal :price
      t.string :color

      t.timestamps
    end
  end
end
