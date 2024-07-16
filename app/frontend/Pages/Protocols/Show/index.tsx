import React from 'react'
import { Box, Code, DangerousHtml, Group, Title, Menu, Page, Section, Table } from '@/Components'
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
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editProtocol(protocol.slug) }>
								Edit Protocol
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Box>Commands:</Box>
				<Table>
					<Table.Body>
						{ protocol.commands.map(command => (
							<Table.Row key={ command.id }>
								<Table.Cell>{ command.title }</Table.Cell>
								<Table.Cell><Code>{ command.server.title }:{ command.address }</Code></Table.Cell>
								<Table.Cell>{ command.value }</Table.Cell>
							</Table.Row>
						)) }
					</Table.Body>
				</Table>

				<DangerousHtml>{ protocol.description }</DangerousHtml>

			</Section>
		</Page>
	)
}

export default ShowProtocol
