class ApplicationController < ActionController::Base
  before_action :authenticate_user! # Uncomment this line to require authentication for all pages
  before_action :update_allowed_parameters, if: :devise_controller?

  def after_sign_in_path_for(_resource)
    root_path
  end

  protected

  def update_allowed_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |u|
      u.permit(:name, :email, :password, :shipping_address, :phone_number1, :phone_number2)
    end
    devise_parameter_sanitizer.permit(:sign_in) { |u| u.permit(:email, :password) }
  end
end
