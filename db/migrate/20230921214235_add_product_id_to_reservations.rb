class AddProductIdToReservations < ActiveRecord::Migration[7.0]
  def change
    add_reference :reservations, :product, null: false, foreign_key: true
  end
end
