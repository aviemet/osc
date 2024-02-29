class CreateServers < ActiveRecord::Migration[7.1]
  def change
    create_table :servers do |t|
      t.string :title
      t.string :hostname
      t.integer :port
      t.text :description

      t.timestamps
    end
  end
end
