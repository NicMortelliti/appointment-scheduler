class Appointment < ApplicationRecord
  has_one :patient
  has_one :doctor
end
