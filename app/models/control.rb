# == Schema Information
#
# Table name: controls
#
#  id           :bigint           not null, primary key
#  color        :string
#  control_type :integer          not null
#  height       :integer
#  max_value    :decimal(, )
#  min_value    :decimal(, )
#  order        :integer          not null
#  title        :string           not null
#  value        :decimal(, )
#  width        :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  command_id   :bigint
#  protocol_id  :bigint
#  screen_id    :bigint           not null
#
# Indexes
#
#  index_controls_on_command_id   (command_id)
#  index_controls_on_protocol_id  (protocol_id)
#  index_controls_on_screen_id    (screen_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#  fk_rails_...  (protocol_id => protocols.id)
#  fk_rails_...  (screen_id => screens.id)
#
class Control < ApplicationRecord
  include PgSearch::Model

  before_validation :set_unique_order
  before_validation :set_spacer_title, if: -> { self.control_type == "spacer" }

  pg_search_scope(
    :search,
    against: [:title, :control_type, :screen, :order, :min_value, :max_value, :value, :protocol],
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
  belongs_to :protocol, optional: true
  belongs_to :command, optional: true

  scope :includes_associated, -> { includes([:protocol, :command]) }

  validate :protocol_xor_command, if: -> { self.control_type != "spacer" }
  validates :order, presence: true
  validates :title, presence: true
  validates :control_type, presence: true

  private

  def set_unique_order
    self.order ||= next_order_number
  end

  def next_order_number
    return nil unless screen

    max_order = screen.controls.maximum(:order)
    max_order ? max_order + 1 : 1
  end

  def set_spacer_title
    self.title = "spacer_#{self.order}"
  end

  def protocol_xor_command
    return if protocol.blank? ^ command.blank?

    errors.add(:protocol_xor_command, "A control must reference either a protocol or a command")
  end
end
