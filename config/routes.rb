Rails.application.routes.draw do
  devise_for :users
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  root 'root#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :categories, only: [:index, :show, :create, :update]
      resources :pictures, only: [:index, :show, :create, :update]
      resources :products, only: [:index, :show, :create, :update]
      resources :users, only: [:index, :show] do
        resources :on_cart_products, only: [:index, :create, :update]
        resources :reservations, only: [:index, :create, :update]
      end
    end
  end
  get '*path', to: 'root#index'
end
