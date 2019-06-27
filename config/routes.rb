Rails.application.routes.draw do
  get 'user/authenticate'
  root 'dashboard#home'
  get '/sign_in' => 'authorization#sign_in', as: 'sign_in'
  get '/sign_up' => 'authorization#sign_up', as: 'sign_up'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
