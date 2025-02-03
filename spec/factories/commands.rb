# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  address            :string
#  allow_custom_value :boolean          default(FALSE), not null
#  description        :text
#  payload_type       :integer
#  slug               :string           not null
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  server_id          :bigint           not null
#
# Indexes
#
#  index_commands_on_server_id  (server_id)
#  index_commands_on_slug       (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (server_id => servers.id)
#
FactoryBot.define do
  factory :command do
    title { "OSC Message" }
    address { "/test/endpoint" }
    payload_type { :integer }
    allow_custom_value { false }

    server

    trait :with_values do
      after(:create) do |command|
        create_list(:command_value, 2, command: command)
      end
    end

    transient do
      protocol { nil }
      delay { nil }
    end

    after(:create) do |command, evaluator|
      if evaluator.protocol
        create(
          :protocols_command,
          command: command,
          protocol: evaluator.protocol,
          delay: evaluator.delay,
        )
      end
    end
  end
end
