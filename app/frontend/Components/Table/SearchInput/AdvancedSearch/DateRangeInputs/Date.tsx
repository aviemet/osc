import React, { useEffect } from 'react'
import { DateInput, type DateInputValue } from '@/Components/Inputs'
import { type AdvancedInputProps } from '.'

const Date = ({
	advancedSearch,
	name,
}: AdvancedInputProps) => {
	const { values, inputProps, setInputValue } = advancedSearch

	const { mb, wrapperProps, value } = inputProps<DateInputValue>(`${name}[start]`)

	const handleChange = (value?: DateInputValue) => {
		if(value === undefined) return

		if(Array.isArray(value)) {
			setInputValue(`${name}[start]`, value[0])
			setInputValue(`${name}[end]`, value[1])
		} else {
			setInputValue(`${name}[start]`, value)
			setInputValue(`${name}[end]`, null)
		}
	}

	const type = values.get(`${name}[type]`)

	useEffect(() => {
		if(type !== 'range') {
			setInputValue(`${name}[end]`, null)
		}
	}, [type, name, setInputValue])

	return (
		<DateInput
			label="Date"
			{ ...{ mb, wrapperProps, value } }
			onChange={ handleChange }
			type={ type === 'range' ? 'range' : 'default' }
		/>
	)
}

export default Date
