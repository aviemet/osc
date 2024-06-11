import React from 'react'
import Td from '../Td'
import { Checkbox } from '@/Components/Inputs'
import { CheckboxProps } from '@/Components/Inputs/Checkbox'
import { useTableContext } from '../TableContext'
import cx from 'clsx'

interface RowCheckBox extends CheckboxProps {
	name: string
	selected: Set<string>
}

const RowCheckbox = ({ name, selected, ...props }: RowCheckBox) => {
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
		<Td fitContent className={ cx('table-row-select-checkbox') }>
			<Checkbox checked={ selected?.has(name) } onChange={ handleClick } { ...props } />
		</Td>
	)
}

export default RowCheckbox
