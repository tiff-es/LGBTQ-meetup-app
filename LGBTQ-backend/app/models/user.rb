class User < ApplicationRecord
  has_secure_password
  has_many :users_meetups
  has_many :meetups, through: :users_meetups
end
