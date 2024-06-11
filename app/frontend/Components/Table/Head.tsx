import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { Table, type TableTheadProps } from '@mantine/core'

interface TableHead extends TableTheadProps {}

const Head = forwardRef<HTMLTableSectionElement, TableHead>((
	{ children, ...props },
	ref,
) => {
	return (
		<TableSectionContextProvider value={ { section: 'head' } }>
			<Table.Thead
				ref={ ref }
				{ ...props }
			>
				{ children }
			</Table.Thead>
		</TableSectionContextProvider>
	)
})

export default Head
