import React from 'react'
import { Box, Code, DangerousHtml, Group, Heading, Link, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ButtonControl from '@/Features/Control/Button'

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
							<Menu.Link href={ Routes.editCommand(command.slug) }>
								Edit Control
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Section>

			<Box>Server: <Link href={ Routes.server(command.server.slug) }>{ command.server.title }</Link> </Box>
			<Box>Address String: <Code>{ command.address }</Code></Box>
			<Box>Payload Type: <Code>{ command.payload_type }</Code></Box>

			<DangerousHtml>{ command.description }</DangerousHtml>

			<Box>Test:</Box>
			<ButtonControl command={ command } />
		</Page>
	)
}

export default ShowCommand
