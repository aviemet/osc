class CreateCommandValues < ActiveRecord::Migration[7.1]
  def change
    create_table :command_values do |t|
      t.string :label
      t.string :value, null: false
      t.references :command, null: false, foreign_key: true

      t.timestamps
    end
  end
end
