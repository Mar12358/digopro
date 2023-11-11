require 'swagger_helper'

RSpec.describe 'api/v1/products', type: :request do
  path '/api/v1/products' do
    get(' Get a list of products') do
      tags 'Products'
      response(200, 'successful') do
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

    post('Create a product') do
      tags 'Products'
      # Define the request parameters here
      response(200, 'successful') do
        consumes 'application/json'
        parameter name: :product, in: :body, schema: {
          type: :object,
          properties: {
            name: { type: :string },
            image_url: { type: :string },
            description: { type: :string },
            category_id: { type: :integer },
            year: { type: :integer },
            is_presice_year: { type: :boolean },
            price: { type: :number },
            color: { type: :string }
          },
          required: %w[name price]
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

  path '/api/v1/products/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('Get a specific product by its id') do
      tags 'Products'
      response(200, 'successful') do
        let(:id) { '123' }

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

  path '/api/v1/products/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'product_id'
    patch('Mark a specific Product as removed') do
      tags 'Products'
      response(200, 'successful') do
        let(:id) { '1' }

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
