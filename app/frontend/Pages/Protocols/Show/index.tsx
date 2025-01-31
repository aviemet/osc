import React from "react"
import { Box, Code, DangerousHtml, Group, Title, Menu, Page, Section, Table, Link } from "@/Components"
import { Routes } from "@/lib"
import { EditButton } from "@/Components/Button"

interface IShowProtocolProps {
	protocol: Schema.ProtocolsShow
}

const ShowProtocol = ({ protocol }: IShowProtocolProps) => {
	const title = protocol.title || "Protocol"

	return (
		<Page title={ title }>
			<Section>
				<Group justify="space-between">
					<Title>{ title }</Title>
					<EditButton href={ Routes.editProtocol(protocol.slug) } />
				</Group>

				<Box>Commands:</Box>
				<Table>
					<Table.Head>
						<Table.Row>
							<Table.HeadCell>Title</Table.HeadCell>
							<Table.HeadCell>Endpoint</Table.HeadCell>
							<Table.HeadCell>Value</Table.HeadCell>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ protocol.commands.map(command => (
							<Table.Row key={ command.id }>
								<Table.Cell>{ command.title }</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.command(command.slug) }>
										<Code>{ command.server.title }:{ command.address }</Code>
									</Link>
								</Table.Cell>
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
