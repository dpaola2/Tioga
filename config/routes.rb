Rails.application.routes.draw do
  get 'topics/index'

  root to: 'visitors#index'
  devise_for :users
end
