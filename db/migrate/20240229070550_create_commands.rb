class CreateCommands < ActiveRecord::Migration[7.1]
  def change
    create_table :commands do |t|
      t.string :title, null: false
      t.text :description
      t.string :slug, null: false
      t.index :slug, unique: true

      t.string :address
      t.references :server, null: false, foreign_key: true

      t.integer :payload_type
      t.boolean :allow_custom_value, null: false, default: false

      t.timestamps
    end
  end
end
