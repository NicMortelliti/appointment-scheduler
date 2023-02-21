Rails.application.routes.draw do
  resources :appointments, only: [:create, :destroy, :index, :update]
  resources :doctors, only: [:create, :index]
  resources :patients, only: [:create, :show]

  delete '/logout', to: 'sessions#destroy'

  get '/blocked', to: 'appointments#blocked'
  get '/me', to: 'patients#show'

  post '/login', to: 'sessions#create'
  post '/signup', to: 'patients#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
