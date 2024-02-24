class CreateScreens < ActiveRecord::Migration[7.1]
  def change
    create_table :screens do |t|
      t.string :slug, null: false
      t.index :slug, unique: true

      t.string :title, null: false
      t.integer :order, null: false

      t.timestamps
    end
  end
end
