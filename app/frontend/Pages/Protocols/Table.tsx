import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { DeleteButton, EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ProtocolTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell>Commands</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (protocol: Schema.ProtocolsIndex) => (
					<Table.Row key={ protocol.slug }>

						<Table.Cell>
							<Link href={ Routes.protocol(protocol.slug) }>{ protocol.title }</Link>
						</Table.Cell>

						<Table.Cell>{ protocol.commands.length }</Table.Cell>

						<Table.Cell fitContent>
							<DeleteButton href={ Routes.protocol(protocol.slug) } mr="xs" />
							<EditButton href={ Routes.editProtocol(protocol.slug) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ProtocolTable
