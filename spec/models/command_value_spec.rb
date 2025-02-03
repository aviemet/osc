# == Schema Information
#
# Table name: command_values
#
#  id         :bigint           not null, primary key
#  label      :string
#  value      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  command_id :bigint           not null
#
# Indexes
#
#  index_command_values_on_command_id  (command_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#
require 'rails_helper'

RSpec.describe CommandValue, type: :model do
  describe "Validations" do
    it "is valid with valid attributes" do
      command = build_stubbed(:command)
      expect(build(:command_value, command: command)).to be_valid
    end

    it "is invalid with missing attributes" do
      command = build_stubbed(:command)
      %i(value).each do |attr|
        expect(build(:command_value, attr => nil, command: command)).not_to be_valid
      end
    end
  end

  describe 'associations' do
    it { is_expected.to belong_to(:command) }
  end

  describe 'command values' do
    it 'can be created with a value' do
      command = create(:command)
      command_value = command.command_values.create(value: 'test_value')

      expect(command_value).to be_persisted
      expect(command_value.value).to eq('test_value')
    end

    it 'can be created with a label' do
      command = create(:command)
      command_value = command.command_values.create(value: 'test_value', label: 'Test Label')

      expect(command_value.label).to eq('Test Label')
    end
  end

  describe 'protocols association' do
    it 'can be referenced by protocols_commands' do
      command = create(:command)
      command_value = create(:command_value, command: command)
      protocol = create(:protocol)

      protocols_command = create(:protocols_command,
        protocol: protocol,
        command: command,
        command_value: command_value,)

      expect(protocols_command.command_value).to eq(command_value)
    end
  end
end
