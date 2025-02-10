class CreateControls < ActiveRecord::Migration[7.1]
  def change
    create_table :controls do |t|
      t.string :title, null: false
      t.integer :control_type, null: false
      t.integer :order, null: false
      t.decimal :min_value
      t.decimal :max_value
      t.decimal :value
      t.string :color
      t.integer :col_span
      t.integer :row_span

      t.references :screen, null: false, foreign_key: true
      t.references :protocol, null: true, foreign_key: true
      t.references :command, null: true, foreign_key: true

      t.timestamps
    end
  end
end
