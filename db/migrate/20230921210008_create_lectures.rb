class CreateLectures < ActiveRecord::Migration[7.0]
  def change
    create_table :lectures do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :web_link
      t.decimal :price

      t.timestamps
    end
  end
end
