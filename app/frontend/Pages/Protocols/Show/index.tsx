import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowProtocolProps {
	protocol: Schema.ProtocolsShow
}

const ShowProtocol = ({ protocol }: IShowProtocolProps) => {
	const title =  'Protocol'

	return (
		<Page title={ title }>
			<Section>
				<Group position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editProtocol(protocol.id) }>
								Edit Protocol
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowProtocol
