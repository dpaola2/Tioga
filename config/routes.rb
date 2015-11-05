Rails.application.routes.draw do
  root to: 'visitors#index'

  get 'topics/index'

  devise_for :users

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :topics do
        get :past, on: :collection
        get :future, on: :collection
      end
      resources :things
    end
  end
end
