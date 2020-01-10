class UsersMeetups < ActiveRecord::Migration[6.0]
  def change
    create_table :users_meetups do |t|
      t.belongs_to :user
      t.belongs_to :meetup
    end
  end
end

