require "rails_helper"

RSpec.describe SendOscProtocolJob, type: :job do
  let(:protocol) { create(:protocol) }
  let(:server) { create(:server) }

  describe "#perform" do
    context "with commands having different delays" do
      it "groups and schedules commands correctly" do
        create(:command, protocol: protocol, server: server, delay: 0)
        create(:command, protocol: protocol, server: server, delay: 1000)
        create(:command, protocol: protocol, server: server, delay: 3000)

        allow(SendOscCommandsJob).to receive(:perform_later)
        allow(SendOscCommandsJob).to receive(:set)
          .with(wait: 0)
          .and_return(SendOscCommandsJob)
        allow(SendOscCommandsJob).to receive(:set)
          .with(wait: 1)
          .and_return(SendOscCommandsJob)
        allow(SendOscCommandsJob).to receive(:set)
          .with(wait: 4)
          .and_return(SendOscCommandsJob)

        described_class.perform_now(protocol)

        expect(SendOscCommandsJob).to have_received(:perform_later)
          .exactly(3).times
      end
    end

    context "with commands for different servers" do
      it "groups commands by server" do
        server2 = create(:server)
        create(:command, protocol: protocol, server: server, delay: 0)
        create(:command, protocol: protocol, server: server2, delay: 0)

        allow(SendOscCommandsJob).to receive(:perform_later)
        allow(SendOscCommandsJob).to receive(:set)
          .with(wait: 0)
          .and_return(SendOscCommandsJob)

        described_class.perform_now(protocol)

        expect(SendOscCommandsJob).to have_received(:perform_later)
          .twice
      end
    end

    context "with consecutive commands without delay" do
      it "groups commands together" do
        create(:command, protocol: protocol, server: server, delay: 0)
        create(:command, protocol: protocol, server: server, delay: 0)

        allow(SendOscCommandsJob).to receive(:perform_later)
        allow(SendOscCommandsJob).to receive(:set)
          .with(wait: 0)
          .and_return(SendOscCommandsJob)

        described_class.perform_now(protocol)

        expect(SendOscCommandsJob).to have_received(:perform_later)
          .once
      end
    end
  end
end
