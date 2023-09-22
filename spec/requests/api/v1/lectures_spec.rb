require 'swagger_helper'

RSpec.describe 'api/v1/lectures', type: :request do
  path '/api/v1/lectures' do
    get('list lectures') do
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

    post('create lecture') do
      # Define the request parameters here
      response(200, 'successful') do
        consumes 'application/json'
        parameter name: :lecture, in: :body, schema: {
          type: :object,
          properties: {
            name: { type: :string },
            image_url: { type: :string },
            description: { type: :string },
            fb_link: { type: :string },
            tw_link: { type: :string },
            ig_link: { type: :string },
            price: { type: :string },
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

  path '/api/v1/lectures/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show lecture') do
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
end
