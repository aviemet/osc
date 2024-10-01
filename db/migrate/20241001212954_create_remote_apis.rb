class CreateRemoteApis < ActiveRecord::Migration[7.1]
  def change
    create_table :remote_apis do |t|
      t.string :title
      t.string :root_url
      t.text :description
      t.string :auth_token

      t.timestamps
    end
  end
end
