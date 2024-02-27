class CreatePayloads < ActiveRecord::Migration[7.1]
  def change
    create_table :payloads do |t|
      t.string :title, null: false
      t.string :endpoint, null: false
      t.string :payload

      t.timestamps
    end
  end
end
