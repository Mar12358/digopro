class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :reservations
  has_many :carts

  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :shipping_address, presence: true,
                               length: { maximum: 100, too_long: '%<count>s characters is the maximum allowed' }
  validates :phone_number1, presence: true,
                            length: { maximum: 20, too_long: '%<count>s characters is the maximum allowed' }
  validates :phone_number2, length: { maximum: 20, too_long: '%<count>s characters is the maximum allowed' }
end
