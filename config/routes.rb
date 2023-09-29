Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  root 'root#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :lectures, only: [:index, :show, :create, :destroy]
      resources :users, only: [:index, :show] do
        resources :reservations, only: [:index, :create]
      end
    end
  end
end
