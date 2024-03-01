# == Schema Information
#
# Table name: controls
#
#  id           :bigint           not null, primary key
#  control_type :integer          not null
#  max_value    :decimal(, )
#  min_value    :decimal(, )
#  order        :integer          not null
#  title        :string           not null
#  value        :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  protocol_id  :bigint           not null
#  screen_id    :bigint           not null
#
# Indexes
#
#  index_controls_on_protocol_id  (protocol_id)
#  index_controls_on_screen_id    (screen_id)
#
# Foreign Keys
#
#  fk_rails_...  (protocol_id => protocols.id)
#  fk_rails_...  (screen_id => screens.id)
#
class Control < ApplicationRecord
  include PgSearch::Model

  before_validation :set_unique_order

  pg_search_scope(
    :search,
    against: [:title, :type, :screen, :order, :min_value, :max_value, :value, :protocol],
    associated_against: {
      screen: [], protocol: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  enum :control_type, { button: 0, slider: 1, spacer: 2 }

  belongs_to :screen
  belongs_to :protocol

  scope :includes_associated, -> { includes([:screen, :protocol]) }

  private

  def set_unique_order
    self.order ||= next_order_number
  end

  def next_order_number
    max_order = screen.controls.maximum(:order)
    max_order ? max_order + 1 : 1
  end
end
