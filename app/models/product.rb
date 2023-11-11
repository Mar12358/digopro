class Product < ApplicationRecord
  has_many :reservations
  has_many :carts
  belongs_to :category

  validates :name, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validates :image_url, presence: true
  validates :description, presence: true,
                          length: { maximum: 150, too_long: '%<count>s characters is the maximum allowed' }
  validates :category, presence: true
  validates :price, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :year, presence: true
  validates :year, numericality: { only_integer: true }
  validates :color, presence: true, length: { maximum: 25, too_long: '%<count>s characters is the maximum allowed' }
  validate :year_within_range

  def year_within_range
    current_year = Time.now.year
    return unless year.present? && (year < 1500 || year > current_year)

    errors.add(:year, "must be between 1500 and #{current_year}")
  end
end
