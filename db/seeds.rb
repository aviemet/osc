Dir[Rails.root.join("db/seeds/**/*.rb").to_s].each do |seed|
  ap "Seeding Data"
  load seed
end
