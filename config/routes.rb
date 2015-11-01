Rails.application.routes.draw do
  root to: 'visitors#index'

  get 'topics/index'

  devise_for :users

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :topics do
        resources :things
      end
    end
  end
end
