Rails.application.routes.draw do
  get 'users/authenticate'
  root 'homepage#homepage'
  get '/sign_in' => 'authorization#sign_in', as: 'sign_in'
  get '/sign_up' => 'authorization#sign_up', as: 'sign_up'
  post '/sign_in' => 'authorization#submit', as: 'submit'
  get '/homepage' => 'homepage#homepage', as: 'home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
end
