class AddReservationAndUserIdToOnCartProducts < ActiveRecord::Migration[7.0]
  def change
    add_reference :on_cart_products, :reservation, null: false, foreign_key: true, default: false
    add_reference :on_cart_products, :user, null: false, foreign_key: true, default: false
  end
end
