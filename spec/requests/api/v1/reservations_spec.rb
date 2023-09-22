require 'swagger_helper'

RSpec.describe 'api/v1/reservations', type: :request do

  path '/api/v1/users/{user_id}/reservations' do
    # You'll want to customize the parameter types...
    parameter name: 'user_id', in: :path, type: :string, description: 'user_id'

    get('list reservations') do
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

    post('create lecture') do
      # Define the request parameters here
      response(200, 'successful') do
        consumes 'application/json'
        parameter name: :lecture, in: :body, schema: {
          type: :object,
          properties: {
            lecture_id: { type: :string },
            date: { type: :string },
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
