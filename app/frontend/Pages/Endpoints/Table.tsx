import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const EndpointTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="url">Url</Table.Cell>
					<Table.Cell sort="description">Description</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (endpoint: Schema.EndpointsIndex) => (
					<Table.Row key={ endpoint.id }>
						<Table.Cell>
							<Link href={ Routes.endpoint(endpoint.id) }>{ endpoint.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.endpoint(endpoint.id) }>{ endpoint.url }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.endpoint(endpoint.id) }>{ endpoint.description }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editEndpoint(endpoint.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default EndpointTable
