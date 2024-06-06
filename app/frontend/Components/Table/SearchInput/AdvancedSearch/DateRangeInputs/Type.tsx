import React from 'react'
import { Select } from '@/Components/Inputs'
import { type AdvancedInputProps } from '.'

export const dateRangeOptions = [
	{ label: 'Exact Date', value: 'exact' },
	{ label: 'Before', value: 'before' },
	{ label: 'After', value: 'after' },
	{ label: 'Between', value: 'range' },
]

type DateRangeType = typeof dateRangeOptions[number]['value']

const Type = ({
	advancedSearch,
	name,
}: AdvancedInputProps) => {
	const { inputProps, setInputValue } = advancedSearch

	const handleChange = (value: DateRangeType|null) => {
		if(!value) return

		setInputValue(`${name}[type]`, value)
	}

	return (
		<Select
			label="Creation Date"
			{ ...inputProps(`${name}[type]`) }
			onChange={ handleChange }
			options={ dateRangeOptions }
		/>
	)
}

export default React.memo(Type)
