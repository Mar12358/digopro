Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # Add the origins that are allowed to access your API

    resource '/api/v1/*', # Adjust this path to match your API routes
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: false # Set this to true if you need to include cookies or authentication headers
  end
end