class UsersMeetups < ActiveRecord::Migration[6.0]
  def change
    create_table :users_meetups do |t|
      t.integer :user_id
      t.integer :meetup_id
    end
  end
end

