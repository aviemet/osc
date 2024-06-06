import React, { useEffect, useState, forwardRef } from 'react'
import Label from './Label'
import { DatePickerInput, type DatePickerInputProps } from '@mantine/dates'
import { CalendarIcon } from '@/Components/Icons'
import { type DateInputValue, type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'
import { isUnset } from '@/lib'

export interface DateInputProps
	extends
	Omit<DatePickerInputProps, 'onChange'|'value'>,
	BaseInputProps
{
	name?: string
	id?: string
	value: DateInputValue
	error?: string | string[]
	onChange?: (date: DateInputValue) => void
}

const DateInputComponent = forwardRef<HTMLButtonElement, DateInputProps>((
	{
		label,
		id,
		name,
		type = 'default',
		size = 'md',
		radius = 'xs',
		valueFormat = 'L',
		required,
		wrapper,
		wrapperProps,
		value,
		onChange,
		...props
	},
	ref,
) => {
	const inputId = id || name

	const [localValue, setLocalValue] = useState<DateInputValue>(value)
	const [datePickerType, setDatePickerType] = useState(type)

	const handleChange = (changeValue: DateInputValue | undefined) => {
		setLocalValue(changeValue)

		onChange?.(changeValue)
	}

	// Allow a Date input's type to change
	useEffect(() => {
		if(datePickerType === type) return

		// DatesRangeValue and Date[] are the Array type options
		if(type === 'range') {
			if(Array.isArray(localValue)) {
				// An array of length 2 indicates it's already a range of dates
				if(localValue.length !== 2) {
					setLocalValue([localValue[0], null])
				}
			} else {
				setLocalValue(localValue ? [localValue] : null)
			}
		} else {
			setLocalValue(Array.isArray(localValue) ? localValue[0] : null)
		}

		setDatePickerType(type)
	}, [type, datePickerType, localValue])

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DatePickerInput
				ref={ ref }
				id={ inputId }
				name={ name }
				value={ isUnset(localValue) ? undefined : localValue }
				type={ datePickerType }
				onChange={ handleChange }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				leftSection={ <CalendarIcon /> }
				leftSectionPointerEvents="none"
				clearable
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default DateInputComponent

