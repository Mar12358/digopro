class ProductOnPicture < ApplicationRecord
  belongs_to :product
  belongs_to :picture
end
