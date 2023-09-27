require 'swagger_helper'

RSpec.describe 'api/v1/reservations', type: :request do
  path '/api/v1/users/{user_id}/reservations' do
    # You'll want to customize the parameter types...
    parameter name: 'user_id', in: :path, type: :string, description: 'user_id'

    get('Get a list of reservations for a specific user_id') do
      tags 'Reservations'
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

    post('Create a reservation for a specific user_id') do
      tags 'Reservations'
      # Define the request parameters here
      response(200, 'successful') do
        consumes 'application/json'
        parameter name: :reservation, in: :body, schema: {
          type: :object,
          properties: {
            lecture_id: { type: :number },
            date: { type: :string, format: :date },
            city: { type: :string }
          },
          required: %w[lecture_id date city]
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
end
