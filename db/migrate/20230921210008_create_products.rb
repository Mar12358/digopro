class CreateLectures < ActiveRecord::Migration[7.0]
  def change
    create_table :lectures do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :category
      t.integer :year
      t.boolean :is_presice_year
      t.decimal :price
      t.string :color

      t.timestamps
    end
  end
end
