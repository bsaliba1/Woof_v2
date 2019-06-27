Rails.application.routes.draw do
  root 'dashboard#home'
  get '/sign_in' => 'sign_in#initial', as: 'sign_in'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
