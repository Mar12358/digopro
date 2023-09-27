class AddRemovedToLectures < ActiveRecord::Migration[7.0]
  def change
    add_column :lectures, :removed, :boolean, default: false
  end
end
