class DoctorsController < ApplicationController

  # POST '/doctors'
  def create
    doctor = Doctor.create!(doctor_params)
    render json: doctor, status: :created
  end

  def index
    doctors = Doctor.all
    render json: doctors
  end

  private

  def doctor_params
    params.permit(:title, :first_name, :last_name)
  end
end
