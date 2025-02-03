# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  description :text
#  hostname    :string           not null
#  port        :integer
#  slug        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_servers_on_slug  (slug) UNIQUE
#
require "rails_helper"

RSpec.describe Server, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      server = build(:server)
      expect(server).to be_valid
    end

    it "is invalid with missing attributes" do
      %i(title).each do |attr|
        expect(build(:server, attr => nil)).not_to be_valid
      end
    end
  end

  describe "associations" do
    it { is_expected.to have_many(:commands) }
  end

end
