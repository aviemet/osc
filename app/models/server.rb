# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  description :text
#  hostname    :string
#  port        :integer
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
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

  tracked owner: proc { |controller| controller&.current_user }
  resourcify

  has_many :commands, dependent: :nullify

  scope :includes_associated, -> { includes([]) }
end
