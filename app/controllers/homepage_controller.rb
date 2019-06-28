class HomepageController < ApplicationController
  def index
    math '*path', to: 'home#index', via: all
  end
end
