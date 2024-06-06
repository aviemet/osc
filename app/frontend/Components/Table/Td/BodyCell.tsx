import React from 'react'
import { useTableContext } from '../TableContext'
import BodyCellWithContext from './BodyCellWithContext'
import { Table } from '@mantine/core'
import { type TableCellProps } from '.'

const BodyCell = ({ children, ...props }: TableCellProps) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return <Table.Td { ...props }>{ children }</Table.Td>
	}

	const { tableState: { model } } = tableState

	return <BodyCellWithContext model={ model } { ...props }>
		{ children }
	</BodyCellWithContext>

}

export default BodyCell
