class Api::V1::LecturesController < ApplicationController
  def index
    @lectures = Lecture.all

    respond_to do |format|
      format.json { render json: @lectures }
    end
  end

  def show
    @lecture = Lecture.find(params[:lecture_id])
  end

  respond_to do |format|
    format.json { render json: @lecture }
  end
end
