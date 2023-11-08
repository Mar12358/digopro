Rails.application.routes.draw do
  devise_for :users
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  root 'root#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :pictures, only: [:index, :show, :create, :update]
      resources :products, only: [:index, :show, :create, :update]
      resources :users, only: [:index, :show] do
        resources :reservations, only: [:index, :create, :update]
      end
    end
  end
  get '*path', to: 'root#index'
end
