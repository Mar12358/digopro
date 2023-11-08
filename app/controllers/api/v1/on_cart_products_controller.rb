class Api::V1::OnCartProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @user = User.includes(:on_cart_products).find(params[:user_id])

    respond_to do |format|
      format.json { render json: @user.on_cart_products }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @product = Product.find(params[:on_cart_product][:product_id]) # Get product_id from the JSON request body
    @on_cart_product = @user.on_cart_products.new(
      product: @product
    )

    if @on_cart_product.save
      respond_to do |format|
        format.json { render json: JSON.pretty_generate(@on_cart_product.as_json), status: :created }
      end
    else
      respond_to do |format|
        format.json do
          render json: JSON.pretty_generate(@on_cart_product.errors.full_messages.as_json),
                 status: :unprocessable_entity
        end
      end
    end
  end

  def on_cart_product_params
    params.require(:on_cart_product).permit(:date, :city)
  end

  def update
    @on_cart_products = OnCartProduct.find(params[:id])

    if @on_cart_product.update(removed: true)
      respond_to do |format|
        format.json { render json: { message: 'Product removed from cart successfully' }, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: { message: 'Unable to remove product from cart' }, status: :unprocessable_entity }
      end
    end
  end
end
