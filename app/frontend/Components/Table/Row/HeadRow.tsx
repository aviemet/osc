import React, { useEffect, forwardRef } from 'react'
import { type TableRow } from './index'
import { Table } from '@mantine/core'
import HeadCheckbox from './HeadCheckbox'
import { useTableContext } from '../TableContext'
import { useCheckboxState } from '@/lib/hooks'
import { coerceArray } from '../../../lib/index'

interface HeadRowProps extends TableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const HeadRow = forwardRef<HTMLTableRowElement, HeadRowProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref,
) => {
	const { tableState: { columns }, setTableState } = useTableContext()

	let { length, selectedCount } = { length: 0, selectedCount: 0 }
	if(selectable) {
		length = rows?.length || 0
		selectedCount = selected.size || 0
	}
	const { allChecked, indeterminate } = useCheckboxState(length, selectedCount)

	// Register hideable attributes in context
	useEffect(() => {
		if(!children) return

		coerceArray(children).forEach(({ props }, i) => {
			const hideable = (props.hideable ?? props.sort) ?? false
			columns[i] = { label: props.children, hideable }
		})
		setTableState({ columns })
	}, [])

	return (
		<Table.Tr { ...props } ref={ ref }>
			{ selectable && <HeadCheckbox
				rows={ rows }
				selected={ selected }
				allChecked={ allChecked }
				indeterminate={ indeterminate }
			/> }
			{ children }
		</Table.Tr>
	)
})

export default HeadRow
