class Api::V1::LecturesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @lectures = Lecture.all
    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@lectures.as_json) }
    end
  end

  def show
    @lecture = Lecture.find(params[:id])
    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@lecture.as_json) }
    end
  end

  def create
    @lecture = Lecture.new(
      name: reservation_params[:name],
      image_url: reservation_params[:image_url],
      description: reservation_params[:description],
      fb_link: reservation_params[:fb_link],
      tw_link: reservation_params[:tw_link],
      ig_link: reservation_params[:ig_link],
      price: reservation_params[:price]
    )

    if @lecture.save
      respond_to do |format|
        format.json { render json: JSON.pretty_generate(@lecture.as_json), status: :created }
      end
    else
      respond_to do |format|
        format.json do
          render json: JSON.pretty_generate(@lecture.errors.full_messages.as_json), status: :unprocessable_entity
        end
      end
    end
  end

  def reservation_params
    params.require(:lecture).permit(:name, :image_url, :description, :fb_link, :tw_link, :ig_link, :price)
  end
end
