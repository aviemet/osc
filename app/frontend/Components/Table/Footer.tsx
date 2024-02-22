import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { Box, ElementProps, type BoxProps } from '@mantine/core'

interface ITableFoot extends BoxProps, ElementProps<'tfoot'> {}

const Footer = forwardRef<HTMLTableSectionElement, ITableFoot>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: 'footer' } }>
			<Box component="tfoot" { ...props } ref={ ref }>
				{ children }
			</Box>
		</TableSectionContextProvider>
	)
})

export default Footer
