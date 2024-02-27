import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const PayloadTable = (props: ITableProps) => {
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
				<Table.RowIterator render={ (payload: Schema.PayloadsIndex) => (
					<Table.Row key={ payload.id }>
						<Table.Cell>
							<Link href={ Routes.payload(payload.id) }>{ payload.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.payload(payload.id) }>{ payload.endpoint }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.payload(payload.id) }>{ payload.payload }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editPayload(payload.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PayloadTable
