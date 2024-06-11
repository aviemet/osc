namespace :api do
  resources :users, only: [:create, :update]

  patch "users/:id/update_user_preferences" => "users#update_user_preferences", as: :update_user_preferences
  patch "users/:id/update_table_preferences" => "users#update_table_preferences", as: :update_table_preferences

  resources :spotlights, only: [:index]

  resources :servers, except: [:edit, :new]

  put "protocol/:id/execute", to: "protocols#execute", as: :execute_protocol
  resources :protocols, except: [:edit, :new], param: :slug

  resources :controls, except: [:edit, :new]

  get "commands/payload_types", to: "commands#payload_types", as: :commands_payload_types
  put "command/:id/execute", to: "commands#execute", as: :execute_command
  resources :commands, except: [:edit, :new], param: :slug

  scope :options do
    [:controls, :protocols].each do |model|
      get model.to_s => "#{model}#options", as: "#{model}_options"
    end
  end
end
