import React from 'react'
import { Box, Code, DangerousHtml, Group, Title, Link, Menu, Page, Section, List } from '@/Components'
import { Routes } from '@/lib'
import ButtonControl from '@/Features/Control/Button'
import { EditButton } from '@/Components/Button'

interface ShowCommandProps {
	command: Schema.CommandsShow
}

const ShowCommand = ({ command }: ShowCommandProps) => {
	const title = command.title ?? 'Command'
	console.log({ command })
	return (
		<Page title={ title }>
			<Section>
				<Group justify="space-between">
					<Title>{ title }</Title>
					<EditButton href={ Routes.editCommand(command.slug) } />
				</Group>

				<Box>Server:
					<Link href={ Routes.server(command.server.slug) }>
						{ command.server.title }
					</Link>
				</Box>
				<Box>Address String: <Code>{ command.address }</Code></Box>
				<Box>Payload Type: <Code>{ command.payload_type }</Code></Box>

				<DangerousHtml>{ command.description }</DangerousHtml>

				<Title order={ 4 }>Member of Protocols</Title>
				<List>
					{ command.protocols.map(protocol => (
						<List.Item key={ protocol.id }>
							<Link href={ Routes.protocol(protocol.slug) }>{ protocol.title }</Link>
						</List.Item>
					)) }
				</List>


				{ /* { command?.command_values && <>
				<Box>Test:</Box>
				{ command.command_values?.map(value => (
					<ButtonControl key={ value.id } command={ command } />
				)) }
			</> } */ }
			</Section>
		</Page>
	)
}

export default ShowCommand
