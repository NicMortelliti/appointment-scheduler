class Patient < ApplicationRecord
  has_secure_password

  validates :first_name, length: { in: 2..254 }
  validates :last_name, length: { in: 2..254 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: { case_sensitive: false }

  has_many :appointments
  has_many :doctors, through: :appointments
end
