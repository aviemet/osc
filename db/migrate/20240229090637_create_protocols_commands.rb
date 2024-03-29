class CreateProtocolsCommands < ActiveRecord::Migration[7.1]
  def change
    create_table :protocols_commands do |t|
      t.references :protocol, null: false, foreign_key: true
      t.references :command, null: false, foreign_key: true
      t.integer :delay

      t.timestamps
    end
  end
end
