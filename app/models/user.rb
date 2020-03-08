class User < ApplicationRecord
  has_secure_password
  has_many :users_meetups
  has_many :meetups, through: :users_meetups
  validates :username, presence: true
  validates :password, presence: true
  validates :name, presence: true
  validates :picture, presence: true
  validates :bio, presence: true
  validates :pronouns, presence: true
end
