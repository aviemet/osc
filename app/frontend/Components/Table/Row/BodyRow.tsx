import React, { forwardRef, useCallback } from "react"
import { type TableRow } from "./index"
import { Table } from "@mantine/core"
import RowCheckbox from "./RowCheckbox"
import { useTableContext } from "../TableContext"
import { usePageProps } from "@/lib/hooks"

interface RowInContextProps extends TableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const RowInContext = forwardRef<HTMLTableRowElement, RowInContextProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref,
) => {
	const { auth: { user: { table_preferences } } } = usePageProps()
	const { tableState: { model, columns } } = useTableContext()

	const isColumnHidden = useCallback((columnIndex: number) => (
		columns[columnIndex]?.hideable &&
		model &&
		table_preferences?.[model]?.hide?.[columns[columnIndex].hideable]
	), [columns, model, table_preferences])

	const length = rows?.length || 0

	return (
		<Table.Tr { ...props } ref={ ref }>
			{ selectable && length > 0 && <RowCheckbox name={ name || "" } selected={ selected } /> }

			{ children && React.Children.map(children, (cell, i) => {
				const label = columns[i]?.label

				if(isColumnHidden(i)) {
					return <React.Fragment key={ label } />
				}

				const cellProps = {
					key: label,
					"data-cell": label,
					role: "cell",
				}

				if(Array.isArray(cell)) {
					return cell.map(subCell => React.cloneElement(subCell, cellProps))
				}

				return React.cloneElement(cell, cellProps)
			}) }
		</Table.Tr>
	)
})

export default RowInContext
