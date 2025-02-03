import React from "react"
import { Routes } from "@/lib"
import { Table, Link, type TableProps, Group } from "@/Components"
import { DeleteButton, EditButton } from "@/Components/Button"

const CommandTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="title">Title</Table.HeadCell>
					<Table.HeadCell sort="address">Address</Table.HeadCell>
					<Table.HeadCell sort="payload_type">Payload</Table.HeadCell>
					<Table.HeadCell className="actions">Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (command: Schema.CommandsIndex) => (
					<Table.Row key={ command.slug }>

						<Table.Cell>
							<Link href={ Routes.command(command.slug) }>{ command.title }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.command(command.slug) }>{ command.address }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.command(command.slug) }>{ command.payload_type }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<Group wrap="nowrap">
								<EditButton href={ Routes.editCommand(command.slug) } />
								<DeleteButton href={ Routes.command(command.slug) } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CommandTable
