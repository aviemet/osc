import React from 'react'
import { Box, DangerousHtml, Group, Heading, Link, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowCommandProps {
	command: Schema.CommandsShow
}

const ShowCommand = ({ command }: IShowCommandProps) => {
	const title = command.title ?? 'Command'

	return (
		<Page title={ title }>
			<Section>
				<Group>
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editCommand(command.id) }>
								Edit Control
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Section>

			<Heading>{ title }</Heading>

			<Box>Server: <Link href={ Routes.server(command.server.slug) }>{ command.server.title }</Link> </Box>
			<Box>Message String: { command.message }</Box>
			<Box>Payload Type: { command.payload_type }</Box>

			<DangerousHtml>{ command.description }</DangerousHtml>
		</Page>
	)
}

export default ShowCommand
