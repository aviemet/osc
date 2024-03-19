import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { DeleteButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ProtocolTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (protocol: Schema.ProtocolsIndex) => (
					<Table.Row key={ protocol.id }>
						<Table.Cell>
							<Link href={ Routes.editProtocol(protocol.id) }>{ protocol.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<DeleteButton href={ Routes.protocol(protocol.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ProtocolTable
