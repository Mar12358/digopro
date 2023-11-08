class OnCartProduct < ApplicationRecord
  belongs_to :user
  belongs_to :reservation
  has_many :products
end
