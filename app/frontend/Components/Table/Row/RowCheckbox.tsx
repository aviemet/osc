import React from 'react'
import Cell from '../Cell'
import { Checkbox } from '@mantine/core'
import { useTableContext } from '../TableContext'

interface IRowCheckBox {
	name: string
	selected: Set<string>
}

const RowCheckbox = ({ name, selected }: IRowCheckBox) => {
	const { setTableState } = useTableContext()

	const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		if(checked) {
			selected.add(name)
		} else {
			selected.delete(name)
		}

		setTableState({ selected })
	}

	return (
		<Cell fitContent>
			<Checkbox checked={ selected?.has(name) } onChange={ handleClick } />
		</Cell>
	)
}

export default RowCheckbox
