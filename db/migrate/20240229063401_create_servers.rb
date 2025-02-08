class CreateServers < ActiveRecord::Migration[7.1]
  def change
    create_table :servers do |t|
      t.string :title, null: false
      t.string :hostname, null: false
      t.integer :port
      t.text :description

      t.string :slug, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
