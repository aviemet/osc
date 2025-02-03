# == Schema Information
#
# Table name: protocols_commands
#
#  id               :bigint           not null, primary key
#  delay            :integer
#  order            :integer          not null
#  value            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  command_id       :bigint           not null
#  command_value_id :bigint
#  protocol_id      :bigint           not null
#
# Indexes
#
#  index_protocols_commands_on_command_id        (command_id)
#  index_protocols_commands_on_command_value_id  (command_value_id)
#  index_protocols_commands_on_protocol_id       (protocol_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#  fk_rails_...  (command_value_id => command_values.id)
#  fk_rails_...  (protocol_id => protocols.id)
#
require "rails_helper"

RSpec.describe ProtocolsCommand, type: :model do
  describe "Validations" do
    it "is valid with valid attributes" do
      protocol = build(:protocol)
      command = build(:command)
      expect(build(:protocols_command, protocol: protocol, command: command)).to be_valid
    end

    it "is invalid with missing attributes" do
      protocol = build(:protocol)
      command = build(:command)
      %i(protocol_id command_id).each do |attr|
        expect(build(:protocols_command, protocol: protocol, command: command, attr => nil)).not_to be_valid
      end
    end
  end

  describe "associations" do
    it { is_expected.to belong_to(:protocol) }
    it { is_expected.to belong_to(:command) }
    it { is_expected.to belong_to(:command_value).optional }
  end

  describe "callbacks" do
    describe "#set_command_order" do
      it "sets order to 1 for first command in protocol" do
        protocol = create(:protocol)
        protocols_command = create(:protocols_command, protocol: protocol, command: create(:command))
        expect(protocols_command.order).to eq(1)
      end

      it "increments order for subsequent commands" do
        protocol = create(:protocol)
        command1 = create(:command)
        command2 = create(:command)

        first_protocols_command = create(:protocols_command, protocol: protocol, command: command1)
        second_protocols_command = create(:protocols_command, protocol: protocol, command: command2)

        expect(first_protocols_command.order).to eq(1)
        expect(second_protocols_command.order).to eq(2)
      end

      it "maintains existing order if specified" do
        protocol = create(:protocol)
        protocols_command = create(:protocols_command, protocol: protocol, command: create(:command), order: 5)
        expect(protocols_command.order).to eq(5)
      end
    end
  end

  describe "scoping" do
    it "orders by order attribute by default" do
      protocol = create(:protocol)
      command3 = create(:protocols_command, protocol: protocol, command: create(:command), order: 3)
      command1 = create(:protocols_command, protocol: protocol, command: create(:command), order: 1)
      command2 = create(:protocols_command, protocol: protocol, command: create(:command), order: 2)

      expect(protocol.protocols_commands.to_a).to eq([command1, command2, command3])
    end
  end

  describe "command values" do
    it "can store a custom value string" do
      protocols_command = create(:protocols_command,
        protocol: create(:protocol),
        command: create(:command),
        value: "custom_value",)
      expect(protocols_command.value).to eq("custom_value")
    end

    it "can reference a command value" do
      command = create(:command)
      command_value = create(:command_value, command: command)
      protocols_command = create(:protocols_command,
        protocol: create(:protocol),
        command: command,
        command_value: command_value,)
      expect(protocols_command.command_value).to eq(command_value)
    end
  end

  describe "delay handling" do
    it "allows nil delay" do
      protocols_command = create(:protocols_command,
        protocol: create(:protocol),
        command: create(:command),
        delay: nil,)
      expect(protocols_command.delay).to be_nil
    end

    it "stores integer delay values" do
      protocols_command = create(:protocols_command,
        protocol: create(:protocol),
        command: create(:command),
        delay: 1000,)
      expect(protocols_command.delay).to eq(1000)
    end
  end
end
