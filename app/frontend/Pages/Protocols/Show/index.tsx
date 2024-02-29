import React from 'react'
import { DangerousHtml, Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowProtocolProps {
	protocol: Schema.ProtocolsShow
}

const ShowProtocol = ({ protocol }: IShowProtocolProps) => {
	const title = protocol.title || 'Protocol'

	return (
		<Page title={ title }>
			<Section>
				<Group>
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

				<DangerousHtml>{ protocol.description }</DangerousHtml>

			</Section>
		</Page>
	)
}

export default ShowProtocol
