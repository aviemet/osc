# == Schema Information
#
# Table name: remote_apis
#
#  id          :bigint           not null, primary key
#  auth_token  :string
#  description :text
#  root_url    :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class RemoteApi < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :root_url, :description, :auth_token],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify


  scope :includes_associated, -> { includes([]) }
end
