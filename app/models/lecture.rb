class Lecture < ApplicationRecord
  has_many :reservations

  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :image_url, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :description, presence: true, length: { maximum: 100, too_long: '%<count>s characters is the maximum allowed' }
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :fb_link, presence: true
  validates :tw_link, presence: true
  validates :ig_link, presence: true
end
