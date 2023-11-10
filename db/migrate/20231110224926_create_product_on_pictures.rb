class CreateProductOnPictures < ActiveRecord::Migration[7.0]
  def change
    create_table :product_on_pictures do |t|
      t.references :product, null: false, foreign_key: true
      t.references :picture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
