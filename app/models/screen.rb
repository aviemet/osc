# == Schema Information
#
# Table name: screens
#
#  id         :bigint           not null, primary key
#  columns    :integer          default(6), not null
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
  extend FriendlyId
  friendly_id :title, use: [:slugged, :history]

  include PgSearchable
  pg_search_config(
    against: [:title, :order],
  )

  resourcify

  attribute :columns, :integer, default: 6

  self.implicit_order_column = "order"

  before_validation :set_screen_order

  has_many :controls, -> { order(order: :asc) }, dependent: :destroy, inverse_of: :screen

  default_scope { order(:order) }
  scope :includes_associated, -> { includes([:controls]) }

  accepts_nested_attributes_for :controls, reject_if: ->(attributes) { attributes["title"].blank? }, allow_destroy: true

  private

  def set_screen_order
    return unless self.order.nil?

    last_screen = Screen.order(:order).last

    self.order = if last_screen.nil? || last_screen.order.nil?
                   1
                 else
                   last_screen.order + 1
                 end
  end

end
