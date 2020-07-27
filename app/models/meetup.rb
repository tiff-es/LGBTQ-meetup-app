# require 'mapbox-sdk'
# Mapbox.access_token = 'pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2s1N2x3MGhsMDUzbDNtcDM4eGVjY3RleSJ9.klT6E311GLDzc9x6KQwNNQ
# '

class Meetup < ApplicationRecord
  has_one :category
  has_many :users_meetups
  has_one :user, through: :users_meetups
  validates :name, presence: true
  validates :location, presence: true
  validates :time, presence: true
  validates :date, presence: true
  #validates :lat, presence: true
  #validates :lon, presence: true

end


