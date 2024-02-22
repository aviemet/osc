namespace :api do
  resources :users, only: [:create, :update]
  patch "users/:id/update_table_preferences" => "users#update_table_preferences", as: :update_table_preferences
  patch "users/:id/update_user_preferences" => "users#update_user_preferences", as: :update_user_preferences

  resources :searches, only: [:index]
  resources :spotlights, only: [:index]

  # resources :currencies, only: [:index]

  ## SETTINGS ##
  # post "smtp/test" => "smtps#test", as: :smtp_test
end
