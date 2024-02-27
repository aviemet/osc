import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ControlTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="type">Type</Table.Cell>
					
					<Table.Cell sort="position">Position</Table.Cell>
					<Table.Cell sort="min_value">Min_value</Table.Cell>
					<Table.Cell sort="max_value">Max_value</Table.Cell>
					<Table.Cell sort="value">Value</Table.Cell>
					
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (control: Schema.ControlsIndex) => (
					<Table.Row key={ control.id }>
						<Table.Cell>
							<Link href={ Routes.control(control.id) }>{ control.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.control(control.id) }>{ control.type }</Link>
						</Table.Cell>
						
						<Table.Cell>
							<Link href={ Routes.control(control.id) }>{ control.position }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.control(control.id) }>{ control.min_value }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.control(control.id) }>{ control.max_value }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.control(control.id) }>{ control.value }</Link>
						</Table.Cell>
						
						<Table.Cell>
							<EditButton href={ Routes.editControl(control.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ControlTable
