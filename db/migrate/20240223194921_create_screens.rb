class CreateScreens < ActiveRecord::Migration[7.1]
  def change
    create_table :screens do |t|
      t.string :title, null: false
      t.integer :order, null: false
      t.integer :columns, null: false, default: 6

      t.string :slug, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
