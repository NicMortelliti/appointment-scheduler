class PatientsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # POST '/signup'
  def create
    user = Patient.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end