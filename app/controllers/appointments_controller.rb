class AppointmentsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # GET '/blocked'
  def blocked
    # Only collect the start date/times
    appointments = Appointment.all.pluck(:start)
    render json: appointments
  end

  # POST '/appointments'
  def create
    appointment = @current_user.appointments.create!(appointment_params)
    render json: appointment, status: :created
  end

  # DESTROY '/appointments/[:id]'
  def destroy
    appointment = find_appointment
    appointment.destroy
    head :no_content
  end

  # GET '/appointments'
  def index
    render json: @current_user.appointments
  end

  # PATCH '/appointments/[:id]'
  def update
    appointment = find_appointment
    if appointment
      appointment.update(appointment_params)
      render json: appointment, status: :created
    else
      render json: { error: 'Appointment not found' }, status: :not_found
    end
  end

  private

  def appointment_params
    params.permit(:start, :doctor_id)
  end

  def find_appointment
    Appointment.find(params[:id])
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
