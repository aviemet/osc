import React, { forwardRef } from 'react'
import { TableSectionContextProvider, useTableContext } from './TableContext'
import { Box, LoadingOverlay, type BoxProps, ElementProps } from '@mantine/core'

interface ITableBody extends BoxProps, ElementProps<'tbody'> {}

const Body = forwardRef<HTMLTableSectionElement, ITableBody>(({ children, ...props }, ref) => {
	try {
		const { tableState: { searching } } = useTableContext()

		return (
			<TableSectionContextProvider value={ { section: 'body' } }>
				<Box component="tbody" { ...props } ref={ ref }>
					{ searching && <tr>
						<td>
							<LoadingOverlay
								visible={ searching }
								overlayProps={ { blur: 1 } }
							/>
						</td>
					</tr> }
					{ children }
				</Box>
			</TableSectionContextProvider>
		)
	} catch(e) {
		return (
			<TableSectionContextProvider value={ { section: 'body' } }>
				<Box component="tbody" { ...props } ref={ ref }>
					{ children }
				</Box>
			</TableSectionContextProvider>
		)
	}
})

export default Body
