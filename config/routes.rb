Rails.application.routes.draw do
  resources :messages
  root 'static#index'
end
