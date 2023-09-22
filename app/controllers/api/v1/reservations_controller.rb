class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @user = User.find(params[:user_id])
    respond_to do |format|
      format.json { render json: @user.reservations }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @lecture = Lecture.find(params[:reservation][:lecture_id])  # Get lecture_id from the JSON request body
    @reservation = @user.reservations.new(
      lecture: @lecture,
      date: reservation_params[:date],
      city: reservation_params[:city]
    )

    if @reservation.save
      respond_to do |format|
        format.json { render json: @reservation, status: :created }
      end
    else
      respond_to do |format|
        format.json { render json: @reservation.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def reservation_params
    params.require(:reservation).permit(:date, :city)
  end
end
