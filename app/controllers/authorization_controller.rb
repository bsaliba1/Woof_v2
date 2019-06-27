class AuthorizationController < ApplicationController
  before_action :params => [:username, :password],
         :add_flash => {
             :error => 'Username and password required to log in'
         },
         :only => :sign_in
  def sign_in
    @user = User.authenticate(params[:username], params[:password])
    if @user
      flash[:notice] = "You're logged in"
      redirect_to root_url
    else
      # sign up
    end
  end
end
