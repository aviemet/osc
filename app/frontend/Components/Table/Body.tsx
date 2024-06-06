import React, { forwardRef } from 'react'
import { TableSectionContextProvider, useTableContext } from './TableContext'
import { Table, LoadingOverlay, type TableTbodyProps } from '@mantine/core'

interface TableBody extends TableTbodyProps {}

const Body = forwardRef<HTMLTableSectionElement, TableBody>(({ children, ...props }, ref) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return (
			<TableSectionContextProvider value={ { section: 'body' } }>
				<Table.Tbody { ...props } ref={ ref }>
					{ children }
				</Table.Tbody>
			</TableSectionContextProvider>
		)
	}

	const { tableState: { searching } } = tableState

	return (
		<TableSectionContextProvider value={ { section: 'body' } }>
			<Table.Tbody { ...props } ref={ ref }>
				{ searching && <tr><td><LoadingOverlay visible={ searching } overlayProps={ { blur: 1 } } /></td></tr> }
				{ children }
			</Table.Tbody>
		</TableSectionContextProvider>
	)
})

export default Body
