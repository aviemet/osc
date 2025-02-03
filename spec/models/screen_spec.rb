# == Schema Information
#
# Table name: screens
#
#  id         :bigint           not null, primary key
#  order      :integer          not null
#  slug       :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_screens_on_slug  (slug) UNIQUE
#
require "rails_helper"

RSpec.describe Screen, type: :model do
  describe "Validations" do
    it "is valid with valid attributes" do
      screen = build(:screen)
      expect(screen).to be_valid
    end

    it "is invalid with missing attributes" do
      %i(title).each do |attr|
        expect(build(:protocol, attr => nil)).not_to be_valid
      end
    end
  end

  describe "Associations" do
    it { is_expected.to have_many(:controls) }

    it "has many controls" do
      screen = create(:screen)
      control1 = create(:control, :with_command, screen: screen)
      control2 = create(:control, :with_command, screen: screen)
      screen.reload

      expect(screen.controls).to include(control1, control2)
    end

    it "destroys associated controls when destroyed" do
      screen = create(:screen)
      control = create(:control, :with_command, screen: screen)

      screen.destroy

      expect(Control.exists?(control.id)).to be false
    end
  end

  describe "Callbacks" do
    describe "#set_screen_order" do
      it "sets order to 1 for first screen" do
        screen = create(:screen)
        expect(screen.order).to eq(1)
      end

      it "increments order for subsequent screens" do
        first_screen = create(:screen)
        second_screen = create(:screen)
        expect(second_screen.order).to eq(first_screen.order + 1)
      end

      it "doesn't change existing order" do
        screen = create(:screen, order: 5)
        expect(screen.order).to eq(5)
      end
    end
  end

  describe "Scopes" do
    it "orders by order attribute by default" do
      screen3 = create(:screen, order: 3)
      screen1 = create(:screen, order: 1)
      screen2 = create(:screen, order: 2)

      expect(described_class.all).to eq([screen1, screen2, screen3])
    end
  end
end
