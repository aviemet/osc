class CreateRemoteEndpoints < ActiveRecord::Migration[7.1]
  def change
    create_table :remote_endpoints do |t|
      t.string :title
      t.references :remote_api, null: false, foreign_key: true
      t.string :endpoint

      t.timestamps
    end
  end
end
