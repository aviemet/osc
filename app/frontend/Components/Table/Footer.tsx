import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { Table, type TableTfootProps } from '@mantine/core'

interface TableFooterProps extends TableTfootProps {}

const Footer = forwardRef<HTMLTableSectionElement, TableFooterProps>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: 'footer' } }>
			<Table.Tfoot { ...props } ref={ ref }>
				{ children }
			</Table.Tfoot>
		</TableSectionContextProvider>
	)
})

export default Footer
