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

  scope :includes_associated, -> { includes([]) }

  private

  def set_screen_order
    return unless self.order.nil?

    last_screen = Screen.order(:order).last
    self.order = last_screen.order + 1
  end
end
