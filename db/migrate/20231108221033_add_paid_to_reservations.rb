class AddPaidToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :paid, :boolean, default: false
  end
end
