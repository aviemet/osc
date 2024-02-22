import React from 'react'
import { useTableContext } from '../TableContext'
import BodyCellWithContext from './BodyCellWithContext'
import { Box } from '@mantine/core'
import { type ICellProps } from './index'

const BodyCell = ({ children, ...props }: ICellProps) => {
	try {
		const { tableState: { model } } = useTableContext()

		return (
			<BodyCellWithContext model={ model } { ...props }>
				{ children }
			</BodyCellWithContext>
		)
	} catch(e) {
		return <Box component="td" { ...props }>{ children }</Box>
	}
}

export default BodyCell
