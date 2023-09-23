class Lecture < ApplicationRecord
  has_many :reservations

  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :image_url, presence: true
  validates :description, presence: true,
                          length: { maximum: 150, too_long: '%<count>s characters is the maximum allowed' }
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :web_link, presence: true
end
