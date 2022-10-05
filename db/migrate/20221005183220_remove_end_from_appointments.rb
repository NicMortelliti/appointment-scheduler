class RemoveEndFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :end, :datetime
  end
end
