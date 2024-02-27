# == Schema Information
#
# Table name: controls
#
#  id          :bigint           not null, primary key
#  max_value   :decimal(, )
#  min_value   :decimal(, )
#  position    :point            not null
#  title       :string           not null
#  type        :integer          not null
#  value       :decimal(, )
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  protocol_id :bigint           not null
#  screen_id   :bigint           not null
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

  pg_search_scope(
    :search,
    against: [:title, :type, :screen, :position, :min_value, :max_value, :value, :protocol],
    associated_against: {
      screen: [], protocol: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  enum :type, { button: 0, slider: 1 }

  belongs_to :screen
  belongs_to :protocol

  scope :includes_associated, -> { includes([:screen, :protocol]) }
end
