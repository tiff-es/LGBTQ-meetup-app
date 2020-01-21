Rails.application.routes.draw do
  root 'static#index'
  namespace :api, defaults: {format: 'json'} do
    get 'users', to: 'users#index'
    get 'meetups', to: 'meetups#index'
    get 'categories', to: 'categories#index'
    post 'meetups', to: 'meetups#create'
  end
  resources :users
  post 'user' => 'users#create'
  resources :categories
  resources :meetups
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
