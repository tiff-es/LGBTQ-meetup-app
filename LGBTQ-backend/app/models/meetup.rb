require 'mapbox-sdk'
class Meetup < ApplicationRecord
  has_one :category
  has_many :users_meetups
  has_many :users, through: :users_meetups
end
