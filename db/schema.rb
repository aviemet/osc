# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_29_095137) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "commands", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.string "slug", null: false
    t.string "message"
    t.bigint "server_id", null: false
    t.integer "payload_type"
    t.string "payload"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "control_payload_id"
    t.index ["control_payload_id"], name: "index_commands_on_control_payload_id"
    t.index ["server_id"], name: "index_commands_on_server_id"
    t.index ["slug"], name: "index_commands_on_slug", unique: true
  end

  create_table "controls", force: :cascade do |t|
    t.string "title", null: false
    t.integer "control_type", null: false
    t.integer "order", null: false
    t.decimal "min_value"
    t.decimal "max_value"
    t.decimal "value"
    t.bigint "screen_id", null: false
    t.bigint "protocol_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["protocol_id"], name: "index_controls_on_protocol_id"
    t.index ["screen_id"], name: "index_controls_on_screen_id"
  end

  create_table "protocols", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_protocols_on_slug", unique: true
  end

  create_table "protocols_commands", force: :cascade do |t|
    t.bigint "protocol_id", null: false
    t.bigint "command_id", null: false
    t.integer "delay"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["command_id"], name: "index_protocols_commands_on_command_id"
    t.index ["protocol_id"], name: "index_protocols_commands_on_protocol_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.bigint "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource"
  end

  create_table "screens", force: :cascade do |t|
    t.string "slug", null: false
    t.string "title", null: false
    t.integer "order", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_screens_on_slug", unique: true
  end

  create_table "servers", force: :cascade do |t|
    t.string "title"
    t.string "hostname"
    t.integer "port"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.bigint "invited_by_id"
    t.integer "invitations_count", default: 0
    t.boolean "active", default: true, null: false
    t.jsonb "user_preferences", default: {}
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
    t.index ["user_preferences"], name: "index_users_on_user_preferences", using: :gin
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  add_foreign_key "commands", "controls", column: "control_payload_id"
  add_foreign_key "commands", "servers"
  add_foreign_key "controls", "protocols"
  add_foreign_key "controls", "screens"
  add_foreign_key "protocols_commands", "commands"
  add_foreign_key "protocols_commands", "protocols"
end
