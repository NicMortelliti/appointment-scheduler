class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start, :patient_id, :doctor_id

  has_one :doctor
end
