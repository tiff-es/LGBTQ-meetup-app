Rails.application.routes.draw do
  root 'static#index'
  namespace :api, defaults: {format: 'json'} do
    get 'users', to: 'users#index'
  end
  resources :users
  resources :categories
  resources :meetups
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
