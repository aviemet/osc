# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  description :text
#  hostname    :string           not null
#  port        :integer
#  slug        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_servers_on_slug  (slug) UNIQUE
#
class Server < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: [:slugged, :history]

  include PgSearchable
  pg_search_config(
    against: [:title, :hostname, :port, :description],
  )

  resourcify

  has_many :commands, dependent: :nullify

  attribute :port, :integer, default: 9091

  validates :hostname, presence: true

  scope :includes_associated, -> { includes([:commands]) }
end
