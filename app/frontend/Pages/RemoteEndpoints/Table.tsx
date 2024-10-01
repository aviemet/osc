import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const RemoteEndpointTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					
					<Table.Cell sort="endpoint">Endpoint</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (remote_endpoint: Schema.RemoteEndpointsIndex) => (
					<Table.Row key={ remote_endpoint.id }>
						<Table.Cell>
							<Link href={ Routes.remoteEndpoint(remote_endpoint.id) }>{ remote_endpoint.title }</Link>
						</Table.Cell>
						
						<Table.Cell>
							<Link href={ Routes.remoteEndpoint(remote_endpoint.id) }>{ remote_endpoint.endpoint }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editRemoteEndpoint(remote_endpoint.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default RemoteEndpointTable
