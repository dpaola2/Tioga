Rails.application.routes.draw do
  root to: 'visitors#index'

  get 'topics/index'

  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :topics
      resources :things
    end
  end
end
