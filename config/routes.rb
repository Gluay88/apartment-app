Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  root 'home#index'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
end
