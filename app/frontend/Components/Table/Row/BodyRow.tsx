import React, { forwardRef } from 'react'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import RowCheckbox from './RowCheckbox'
import { usePage } from '@inertiajs/react'
import { useTableContext } from '../TableContext'

interface IRowInContextProps extends ITableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const RowInContext = forwardRef<HTMLTableRowElement, IRowInContextProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref,
) => {
	const { auth: { user: { table_preferences } } } = usePage<SharedInertiaProps>().props
	const { tableState: { model, columns } } = useTableContext()

	return (
		<Box component="tr" role="row" { ...props } ref={ ref }>
			{ selectable && <RowCheckbox name={ name || '' } selected={ selected } /> }
			{ React.Children.map(children, (cell, i) => {
				if((
					columns[i]?.hideable &&
					model &&
					table_preferences?.[model]?.hide?.[columns[i].hideable]
				)) {
					return <React.Fragment key={ columns[i]?.label } />
				}
				return React.cloneElement(cell, {
					key: columns[i]?.label,
					'data-cell': columns[i]?.label,
					role: 'cell',
				})
			}) }
		</Box>
	)
})

export default RowInContext
