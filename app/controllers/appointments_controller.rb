class AppointmentsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/appointments'
  def create
    appointment = Appointment.create!(appointment_params)
    render json: appointment, status: :created
  end

  private

  def appointment_params
    params.permit(:start, :doctor_id, :user_id)
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
