class CreateLectures < ActiveRecord::Migration[7.0]
  def change
    create_table :lectures do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :fb_link
      t.string :tw_link
      t.string :ig_link
      t.decimal :price

      t.timestamps
    end
  end
end
