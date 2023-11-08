class Picture < ApplicationRecord
  has_many :products

  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :image_url, presence: true
  validates :description, presence: true,
                          length: { maximum: 150, too_long: '%<count>s characters is the maximum allowed' }
  validates :color, presence: true
end
