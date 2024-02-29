class AddFieldsToCommands < ActiveRecord::Migration[7.1]
  def change
    add_reference :commands, :control_payload, foreign_key: { to_table: :controls }
  end
end
