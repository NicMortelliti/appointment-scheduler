class Appointment < ApplicationRecord
  validates :start, presence: true

  belongs_to :patient
  belongs_to :doctor
end
