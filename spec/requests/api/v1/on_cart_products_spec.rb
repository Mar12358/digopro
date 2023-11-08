require 'swagger_helper'

RSpec.describe 'api/v1/on_cart_products', type: :request do
  path '/api/v1/users/{user_id}/on_cart_products' do
    # You'll want to customize the parameter types...
    parameter name: 'user_id', in: :path, type: :string, description: 'user_id'

    get('Get a list of products on cart for a specific user_id') do
      tags 'Products on Cart'
      response(200, 'successful') do
        let(:user_id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    post('Add a product to cart for a specific user_id') do
      tags 'Products on Cart'
      # Define the request parameters here
      response(200, 'successful') do
        consumes 'application/json'
        parameter name: :on_cart_product, in: :body, schema: {
          type: :object,
          properties: {
            product_id: { type: :number }
          },
          required: %w[product_id date city]
        }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/users/{user_id}/on_cart_products/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'user_id', in: :path, type: :string, description: 'user_id'
    parameter name: 'id', in: :path, type: :string, description: 'on_cart_product_id'
    patch('Mark a specific Product on Cart as removed') do
      tags 'Products on Cart'
      response(200, 'successful') do
        let(:user_id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
