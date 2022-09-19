Rails.application.routes.draw do
  
  resources :appointments
  resources :doctors
  resources :patients

  post '/signup', to: 'patients#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
