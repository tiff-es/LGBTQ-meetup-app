class User < ApplicationRecord
  has_many :users_meetups
  has_many :meetups, through: :users_meetups
end
