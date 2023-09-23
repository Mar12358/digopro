class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all

    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@users.as_json) }
    end
  end

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@user.as_json) }
    end
  end
end
