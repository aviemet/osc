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
require 'rails_helper'

RSpec.describe Command, type: :model do
  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:command)).to be_valid
    end

    it "is invalid with missing attributes" do
      %i(title).each do |attr|
        expect(build(:command, attr => nil)).not_to be_valid
      end
    end
  end

  describe 'associations' do
    it { is_expected.to have_many(:protocols_commands).dependent(:destroy) }
    it { is_expected.to have_many(:protocols).through(:protocols_commands) }
    it { is_expected.to have_many(:command_values).dependent(:destroy) }
    it { is_expected.to belong_to(:server) }
  end

  describe 'nested attributes' do
    it { is_expected.to accept_nested_attributes_for(:command_values).allow_destroy(true) }
  end

  describe 'slug generation' do
    it 'generates a slug from the title' do
      command = create(:command, title: 'Test Command')
      expect(command.slug).to eq('test-command')
    end

    it 'ensures slug uniqueness' do
      command1 = create(:command, title: 'Test Command')
      command2 = create(:command, title: 'Test Command')

      expect(command1.slug).to eq('test-command')
      expect(command2.slug).to eq('test-command-1')
    end
  end

  describe 'command values' do
    let(:command) { create(:command) }

    it 'can have multiple command values' do
      command.command_values.create([
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' }
      ])

      expect(command.command_values.count).to eq(2)
    end
  end

  describe 'protocols association' do
    let(:command) { create(:command) }
    let(:protocol) { create(:protocol) }

    it 'can be associated with multiple protocols' do
      command.protocols << protocol
      expect(command.protocols).to include(protocol)
    end

    it 'creates protocols_command with correct order' do
      command.protocols << protocol
      expect(command.protocols_commands.first.order).to eq(1)
    end
  end
end
