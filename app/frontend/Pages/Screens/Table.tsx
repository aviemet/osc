import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ScreenTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="order">Order</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (screen: Schema.ScreensIndex) => (
					<Table.Row key={ screen.id }>
						<Table.Cell>
							<Link href={ Routes.screen(screen.id) }>{ screen.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.screen(screen.id) }>{ screen.order }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editScreen(screen.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ScreenTable
