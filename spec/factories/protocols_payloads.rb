# == Schema Information
#
# Table name: protocols_payloads
#
#  id          :bigint           not null, primary key
#  delay       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  payload_id  :bigint           not null
#  protocol_id :bigint           not null
#
# Indexes
#
#  index_protocols_payloads_on_payload_id   (payload_id)
#  index_protocols_payloads_on_protocol_id  (protocol_id)
#
# Foreign Keys
#
#  fk_rails_...  (payload_id => payloads.id)
#  fk_rails_...  (protocol_id => protocols.id)
#
FactoryBot.define do
  factory :protocols_payload do
    protocol { nil }
    payload { nil }
    delay { 1 }
  end
end
