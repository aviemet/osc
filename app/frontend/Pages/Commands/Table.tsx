import React from 'react'
import { Routes } from '@/lib'
import { Table, Link, type TableProps } from '@/Components'
import { DeleteButton, EditButton } from '@/Components/Button'

const CommandTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="address">Address</Table.Cell>
					<Table.Cell sort="payload_type">Payload</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
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
							<DeleteButton href={ Routes.command(command.slug) } mr="xs" />
							<EditButton href={ Routes.editCommand(command.slug) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CommandTable
