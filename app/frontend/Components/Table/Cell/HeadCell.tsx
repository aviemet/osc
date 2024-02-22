import React from 'react'
import { useTableContext } from '../TableContext'
import HeadCellWithContext from './HeadCellWithContext'
import { Box } from '@mantine/core'
import { type ICellProps } from './index'

const HeadCell = ({ children, ...props }: ICellProps) => {
	try {
		const { tableState: { rows } } = useTableContext()

		return (
			<HeadCellWithContext { ...props } rows={ rows }>
				{ children }
			</HeadCellWithContext>
		)
	} catch(e) {
		return <Box component="th" { ...props }>{ children }</Box>
	}
}

export default HeadCell
