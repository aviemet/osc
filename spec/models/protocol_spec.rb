# == Schema Information
#
# Table name: protocols
#
#  id          :bigint           not null, primary key
#  description :text
#  slug        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_protocols_on_slug  (slug) UNIQUE
#
require 'rails_helper'

RSpec.describe Protocol, type: :model do
  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:protocol)).to be_valid
    end

    it "is invalid with missing attributes" do
      %i(title).each do |attr|
        expect(build(:protocol, attr => nil)).not_to be_valid
      end
    end
  end

  describe 'associations' do
    it 'has many protocols_commands' do
      protocol = create(:protocol)
      command = create(:command)
      protocols_command = create(:protocols_command, protocol: protocol, command: command)

      expect(protocol.protocols_commands).to include(protocols_command)
    end

    it 'has many commands through protocols_commands' do
      protocol = create(:protocol)
      command = create(:command)
      create(:protocols_command, protocol: protocol, command: command)

      expect(protocol.commands).to include(command)
    end

    it 'destroys dependent protocols_commands when deleted' do
      protocol = create(:protocol)
      command = create(:command)
      create(:protocols_command, protocol: protocol, command: command)

      expect { protocol.destroy }.to change(ProtocolsCommand, :count).by(-1)
    end

    it 'nullifies associated commands when deleted' do
      protocol = create(:protocol)
      command = create(:command)
      create(:protocols_command, protocol: protocol, command: command)

      protocol.destroy
      command.reload

      expect(command.persisted?).to be true
    end
  end

  describe 'nested attributes' do
    it 'accepts nested attributes for protocols_commands' do
      protocol = create(:protocol)
      command = create(:command)

      protocol.update(protocols_commands_attributes: [{
        command_id: command.id,
        value: "test_value"
      }])

      expect(protocol.protocols_commands.first.value).to eq("test_value")
    end

    it 'allows destroying protocols_commands through nested attributes' do
      protocol = create(:protocol)
      command = create(:command)
      protocols_command = create(:protocols_command, protocol: protocol, command: command)

      expect {
        protocol.update(protocols_commands_attributes: [{
          id: protocols_command.id,
          _destroy: '1'
        }])
      }.to change(ProtocolsCommand, :count).by(-1)
    end
  end

  describe 'slug generation' do
    it 'generates a slug from the title' do
      protocol = create(:protocol, title: 'Test Protocol')
      expect(protocol.slug).to eq('test-protocol')
    end

    it 'ensures slug uniqueness' do
      protocol1 = create(:protocol, title: 'Test Protocol')
      protocol2 = create(:protocol, title: 'Test Protocol')

      expect(protocol1.slug).to eq('test-protocol')
      expect(protocol2.slug).to eq('test-protocol-1')
    end
  end
end
