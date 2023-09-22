class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :lecture

 validates :city, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
 validates :date, presence: true
end
