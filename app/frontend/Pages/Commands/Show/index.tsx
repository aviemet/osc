import React from 'react'
import { Box, Code, DangerousHtml, Group, Title, Link, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ButtonControl from '@/Features/Control/Button'

interface ShowCommandProps {
	command: Schema.CommandsShow
}

const ShowCommand = ({ command }: ShowCommandProps) => {
	const title = command.title ?? 'Command'

	return (
		<Page title={ title }>
			<Section>
				<Group>
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editCommand(command.slug) }>
								Edit Control
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Section>

			<Box>Server:
				<Link href={ Routes.server(command.server.slug) }>
					{ command.server.title }
				</Link>
			</Box>
			<Box>Address String: <Code>{ command.address }</Code></Box>
			<Box>Payload Type: <Code>{ command.payload_type }</Code></Box>

			<DangerousHtml>{ command.description }</DangerousHtml>

			{ /* { command?.command_values && <>
				<Box>Test:</Box>
				{ command.command_values?.map(value => (
					<ButtonControl key={ value.id } command={ command } />
				)) }
			</> } */ }
		</Page>
	)
}

export default ShowCommand
