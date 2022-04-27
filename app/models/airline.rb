class Airline < ApplicationRecord
  has_many :reviews, dependent: :destroy

  before_commit :slugify, on: %i[create update]

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 if reviews.blank?

    reviews.average(:score)&.round(2)&.to_f || 0
  end
end
