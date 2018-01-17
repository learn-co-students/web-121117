Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :drinks

  get "/contact", to: "contact#contact_form", as: "contact_form"
  post "/contact", to: "contact#contact_action", as: "contact_action"

end
