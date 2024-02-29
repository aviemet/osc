class CreateControls < ActiveRecord::Migration[7.1]
  def change
    create_table :controls do |t|
      t.string :title, null: false
      t.integer :type, null: false
      t.point :position, null: false
      t.decimal :min_value
      t.decimal :max_value
      t.decimal :value
      t.references :screen, null: false, foreign_key: true
      t.references :protocol, null: false, foreign_key: true

      t.timestamps
    end
  end
end
