class Api::SpotlightsController < Api::ApiController
  expose :items, -> { @active_company.items }
  expose :accessories, -> { @active_company.accessories }
  expose :components, -> { @active_company.components }
  expose :consumables, -> { @active_company.consumables }
  expose :licenses, -> { @active_company.licenses }
  expose :people, -> { @active_company.people }
  expose :tickets, -> { current_user.person.tickets }
  expose :networks, -> { @active_company.networks }
  expose :vendors, -> { @active_company.vendors }
  expose :contracts, -> { @active_company.contracts }

  # @route GET /api/spotlights (api_spotlights)
  def index
    render json: {
      items: ItemSerializer.render(items),
      accessories: AccessorySerializer.render(accessories),
      components: ComponentSerializer.render(components),
      consumables: ConsumableSerializer.render(consumables),
      licenses: LicenseSerializer.render(licenses),
      people: PersonSerializer.render(people),
      tickets: TicketSerializer.render(tickets),
      networks: NetworkSerializer.render(networks),
      vendors: VendorSerializer.render(vendors),
      contracts: ContractSerializer.render(contracts),
    }
  end
end
