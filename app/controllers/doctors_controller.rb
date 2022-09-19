class DoctorsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
  
  # Return all doctors
  def index
    doctors = Doctor.all
    render json: doctors, status: :ok
  end
  
  private

  def render_record_not_found
    render json: { error: 'Doctor not found' }, status: :not_found
  end
end
