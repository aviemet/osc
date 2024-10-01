import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const RemoteApiTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="root_url">Root_url</Table.Cell>
					<Table.Cell sort="description">Description</Table.Cell>
					<Table.Cell sort="auth_token">Auth_token</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (remote_api: Schema.RemoteApisIndex) => (
					<Table.Row key={ remote_api.id }>
						<Table.Cell>
							<Link href={ Routes.remoteApi(remote_api.id) }>{ remote_api.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.remoteApi(remote_api.id) }>{ remote_api.root_url }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.remoteApi(remote_api.id) }>{ remote_api.description }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.remoteApi(remote_api.id) }>{ remote_api.auth_token }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editRemoteApi(remote_api.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default RemoteApiTable
