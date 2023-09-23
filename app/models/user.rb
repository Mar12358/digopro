class User < ApplicationRecord
  has_many :reservations

  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
end
