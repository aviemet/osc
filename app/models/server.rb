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
  include PgSearch::Model
  include PublicActivity::Model

  pg_search_scope(
    :search,
    against: [:title, :hostname, :port, :description],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  slug :title

  has_many :commands, dependent: :nullify

  attribute :port, :integer, default: 9091

  validates :hostname, presence: true

  scope :includes_associated, -> { includes([:commands]) }
end
