import React from 'react'
import Cell from '../Cell'
import { Checkbox } from '@mantine/core'
import { useTableContext } from '../TableContext'

interface IRowCheckBox {
	selected: Set<string>
	rows?: Record<string,any>[]
	allChecked: boolean
	indeterminate: boolean
}

const HeadCheckbox = ({ selected, rows, allChecked, indeterminate }: IRowCheckBox) => {
	const { setTableState } = useTableContext()

	const handleClick = () => {
		if(!rows || rows.length === 0) return

		if(selected.size === rows.length) {
			selected.clear()
		} else {
			rows.forEach(row => {
				selected.add(String(row.id))
			})
		}

		setTableState({ selected })
	}

	return (
		<Cell fitContent>
			<Checkbox onChange={ handleClick } checked={ allChecked } indeterminate={ indeterminate } disabled={ rows?.length === 0 } />
		</Cell>
	)
}

export default HeadCheckbox
