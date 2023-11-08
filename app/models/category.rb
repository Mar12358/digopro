class Category < ApplicationRecord
  has_many :products
  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :description, presence: true,
                          length: { maximum: 100, too_long: '%<count>s characters is the maximum allowed' }
end
