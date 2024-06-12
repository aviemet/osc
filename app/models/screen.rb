# == Schema Information
#
# Table name: screens
#
#  id         :bigint           not null, primary key
#  order      :integer          not null
#  slug       :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_screens_on_slug  (slug) UNIQUE
#
class Screen < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :order],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  before_validation :set_screen_order

  resourcify

  slug :title

  has_many :controls, -> { order(order: :asc) }, dependent: :nullify, inverse_of: :screen

  scope :includes_associated, -> { includes([:controls]) }

  validates :title, format: { without: /new/ }

  accepts_nested_attributes_for :controls, reject_if: ->(attributes) { attributes['title'].blank? }, allow_destroy: true

  private

  def set_screen_order
    return unless self.order.nil?

    last_screen = Screen.order(:order).last
    self.order = last_screen.nil? ? 1 : last_screen.order + 1
  end
end
