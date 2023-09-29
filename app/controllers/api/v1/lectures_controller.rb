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
      web_link: reservation_params[:web_link],
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

  def destroy

    @lecture = Lecture.find(params[:id])
    @lecture.destroy

    respond_to do |format|
      format.html { redirect_to root_url, notice: 'Lecture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  def reservation_params
    params.require(:lecture).permit(:name, :image_url, :description, :web_link, :price)
  end
end
