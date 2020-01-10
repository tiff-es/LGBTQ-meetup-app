# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_10_040016) do

  create_table "categories", force: :cascade do |t|
    t.string "category"
    t.integer "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "meetups", force: :cascade do |t|
    t.string "location"
    t.integer "category_id"
    t.time "time"
    t.date "date"
    t.text "info"
    t.integer "meetup_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "picture"
    t.text "bio"
    t.integer "user_id"
    t.string "pronouns"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users_meetups", force: :cascade do |t|
    t.integer "user_id"
    t.integer "meetup_id"
    t.index ["meetup_id"], name: "index_users_meetups_on_meetup_id"
    t.index ["user_id"], name: "index_users_meetups_on_user_id"
  end

end
