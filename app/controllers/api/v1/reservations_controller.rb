class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @user = User.includes(:reservations).find(params[:user_id])

    respond_to do |format|
      format.json { render json: @user.reservations }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @lecture = Lecture.find(params[:reservation][:lecture_id]) # Get lecture_id from the JSON request body
    @reservation = @user.reservations.new(
      lecture: @lecture,
      date: reservation_params[:date],
      city: reservation_params[:city]
    )

    if @reservation.save
      respond_to do |format|
        format.json { render json: JSON.pretty_generate(@reservation.as_json), status: :created }
      end
    else
      respond_to do |format|
        format.json do
          render json: JSON.pretty_generate(@reservation.errors.full_messages.as_json), status: :unprocessable_entity
        end
      end
    end
  end

  def reservation_params
    params.require(:reservation).permit(:date, :city)
  end

  def update
    @reservation = Reservation.find(params[:id])

    if @reservation.update(removed: true)
      respond_to do |format|
        format.json { render json: { message: "Reservation removed successfully" }, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: { message: "Unable to remove reservation" }, status: :unprocessable_entity }
      end
    end
  end
end
