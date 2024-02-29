import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const CommandTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="endpoint">Endpoint</Table.Cell>
					<Table.Cell sort="payload">Payload</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (command: Schema.CommandsIndex) => (
					<Table.Row key={ command.id }>
						<Table.Cell>
							<Link href={ Routes.command(command.id) }>{ command.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.command(command.id) }>{ command.endpoint }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.command(command.id) }>{ command.payload }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editCommand(command.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CommandTable
