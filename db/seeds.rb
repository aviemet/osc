Dir[Rails.root.join("db/seeds/**/*.rb").to_s].each do |seed|
  load seed
end
