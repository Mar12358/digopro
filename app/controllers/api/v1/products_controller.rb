class Api::V1::ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @products = Product.all
    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@products.as_json) }
    end
  end

  def show
    @product = Product.find(params[:id])
    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@product.as_json) }
    end
  end

  def create
    @product = Product.new(
      name: product_params[:name],
      description: product_params[:description],
      image_url: product_params[:image_url],
      category: product_params[:category],
      year: product_params[:year],
      is_presice_year: product_params[:is_presice_year],
      price: product_params[:price],
      color: product_params[:color]
    )

    if @product.save
      respond_to do |format|
        format.json { render json: JSON.pretty_generate(@product.as_json), status: :created }
      end
    else
      respond_to do |format|
        format.json do
          render json: JSON.pretty_generate(@product.errors.full_messages.as_json), status: :unprocessable_entity
        end
      end
    end
  end

  def product_params
    params.require(:product).permit(:name, :description, :image_url, :category, :year, :is_presice_year, :price, :color)
  end

  def update
    @product = Product.find(params[:id])

    if @product.update(removed: true)
      respond_to do |format|
        format.json { render json: { message: 'Product removed successfully' }, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: { message: 'Unable to remove product' }, status: :unprocessable_entity }
      end
    end
  end
end
