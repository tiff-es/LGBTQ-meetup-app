class CreateMeetups < ActiveRecord::Migration[6.0]
  def change
    create_table :meetups do |t|
      t.string :location
      t.time :time
      t.date :date
      t.text :info
      t.integer :category_id

      t.timestamps
    end
  end
end
