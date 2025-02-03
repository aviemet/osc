class CreateServers < ActiveRecord::Migration[7.1]
  def change
    create_table :servers do |t|
      t.string :title, null: false
      t.string :slug, null: false
      t.index :slug, unique: true
      t.string :hostname, null: false
      t.integer :port
      t.text :description

      t.timestamps
    end
  end
end
