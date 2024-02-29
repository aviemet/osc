class CreatePayloads < ActiveRecord::Migration[7.1]
  def change
    create_table :payloads do |t|
      t.string :title, null: false
      t.references :endpoint, null: false, foreign_key: true
      t.string :payload

      t.timestamps
    end
  end
end
