class CreateMeetups < ActiveRecord::Migration[6.0]
  def change
    create_table :meetups do|t|
      t.string :name
      t.string :location
      t.float :lat
      t.float :lon
      t.time :time
      t.date :date
      t.text :info
      t.integer :category_id
      t.timestamps
    end
  end
end
