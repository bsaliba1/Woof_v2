Rails.application.routes.draw do
  get 'user/authenticate'
  root 'dashboard#home'
  get '/sign_in' => 'authorization#home', as: 'sign_in'
  get '/sign_up' => 'authorization#sign_up', as: 'sign_up'
  post '/sign_in_authorization',to: 'authorization#sign_in',as: :sign_in_authorization
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
end
