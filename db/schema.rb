ActiveRecord::Schema[7.0].define(version: 2023_09_21_214235) do
  enable_extension "plpgsql"

  create_table "lectures", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.string "fb_link"
    t.string "tw_link"
    t.string "ig_link"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.date "date"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "lecture_id", null: false
    t.index ["lecture_id"], name: "index_reservations_on_lecture_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "reservations", "lectures"
  add_foreign_key "reservations", "users"
end
