# == Schema Information
#
# Table name: controls
#
#  id           :bigint           not null, primary key
#  col_span     :integer
#  color        :string
#  control_type :integer          not null
#  max_value    :decimal(, )
#  min_value    :decimal(, )
#  order        :integer          not null
#  row_span     :integer
#  title        :string           not null
#  value        :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  command_id   :bigint
#  protocol_id  :bigint
#  screen_id    :bigint           not null
#
# Indexes
#
#  index_controls_on_command_id   (command_id)
#  index_controls_on_protocol_id  (protocol_id)
#  index_controls_on_screen_id    (screen_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#  fk_rails_...  (protocol_id => protocols.id)
#  fk_rails_...  (screen_id => screens.id)
#
require 'rails_helper'

RSpec.describe Control, type: :model do
  describe "Validations" do
    it "is valid with valid attributes" do
      screen = build_stubbed(:screen)
      command = build_stubbed(:command)
      expect(build(:control, screen: screen, command: command)).to be_valid
    end

    it "is invalid with missing attributes" do
      screen = build_stubbed(:screen)
      command = build_stubbed(:command)
      %i(control_type title).each do |attr|
        expect(build(:control, attr => nil, screen: screen, command: command)).not_to be_valid
      end
    end
  end

  describe 'associations' do
    it { is_expected.to belong_to(:screen) }
    it { is_expected.to belong_to(:protocol).optional }
    it { is_expected.to belong_to(:command).optional }
  end

  describe 'enums' do
    it { is_expected.to define_enum_for(:control_type).with_values(button: 0, slider: 1, spacer: 2) }
  end

  describe 'callbacks' do
    describe '#set_unique_order' do
      it 'sets order to 1 for first control in screen' do
        screen = create(:screen)
        control = create(:control, :with_command, screen: screen)
        expect(control.order).to eq(1)
      end

      it 'increments order for subsequent controls' do
        screen = create(:screen)
        create(:control, :with_command, screen: screen, order: 1)
        control = create(:control, :with_command, screen: screen)
        expect(control.order).to eq(2)
      end
    end

    describe '#set_spacer_title' do
      it 'sets title for spacer controls' do
        screen = create(:screen)
        control = create(:control, :with_command, screen: screen, control_type: :spacer)
        expect(control.title).to eq("spacer_#{control.order}")
      end

      it 'does not modify title for non-spacer controls' do
        screen = create(:screen)
        control = create(:control, :with_command, screen: screen, control_type: :button, title: 'Test Button')
        expect(control.title).to eq('Test Button')
      end
    end
  end

  describe '#protocol_xor_command' do
    it 'allows control with protocol but no command' do
      protocol = create(:protocol)
      control = build(:control, protocol: protocol, command: nil)
      control.valid?
      expect(control.errors[:protocol_xor_command]).to be_empty
    end

    it 'allows control with command but no protocol' do
      command = create(:command)
      control = build(:control, command: command, protocol: nil)
      control.valid?
      expect(control.errors[:protocol_xor_command]).to be_empty
    end

    it 'does not allow control with both protocol and command' do
      protocol = create(:protocol)
      command = create(:command)
      control = build(:control, protocol: protocol, command: command)
      control.valid?
      expect(control.errors[:protocol_xor_command]).to include('A control must reference either a protocol or a command')
    end

    it 'does not allow control with neither protocol nor command' do
      control = build(:control, protocol: nil, command: nil)
      control.valid?
      expect(control.errors[:protocol_xor_command]).to include('A control must reference either a protocol or a command')
    end

    it 'skips validation for spacer controls' do
      control = build(:control, control_type: :spacer, protocol: nil, command: nil)
      control.valid?
      expect(control.errors[:protocol_xor_command]).to be_empty
    end
  end
end
