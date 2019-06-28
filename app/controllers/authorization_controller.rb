class AuthorizationController < ApplicationController
  before_action :params => [:username, :password],
         :add_flash => {
             :error => 'Username and password required to log in'
         },
         :only => :sign_in
  def sign_in
    # nothing happens for now
  end
  def submit
    flash[:notice] = "You got it"
    redirect_to home_url
  end
end
