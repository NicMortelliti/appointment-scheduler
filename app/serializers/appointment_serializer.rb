class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :slot, :patient_id, :doctor_id
end
