Rails.application.routes.draw do
  resources :appointments
  resources :doctors
  resources :patients

  delete '/appoointments', to: 'appointments#destroy'
  delete '/logout', to: 'sessions#destroy'

  get '/appointments', to: 'appointments#index'
  get '/doctors', to: 'doctors#index'
  get '/me', to: 'patients#show'

  post '/signup', to: 'patients#create'
  post '/login', to: 'sessions#create'
  post '/appointments', to: 'appointments#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
