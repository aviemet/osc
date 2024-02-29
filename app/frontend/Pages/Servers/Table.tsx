import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ServerTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="hostname">Hostname</Table.Cell>
					<Table.Cell sort="port">Port</Table.Cell>
					<Table.Cell sort="description">Description</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (server: Schema.ServersIndex) => (
					<Table.Row key={ server.id }>
						<Table.Cell>
							<Link href={ Routes.server(server.id) }>{ server.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.server(server.id) }>{ server.hostname }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.server(server.id) }>{ server.port }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.server(server.id) }>{ server.description }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editServer(server.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ServerTable
