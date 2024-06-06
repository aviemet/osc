import React, { forwardRef } from 'react'
import Label from './Label'
import { DateTimePicker, DateTimePickerProps } from '@mantine/dates'
import { CalendarIcon } from '../Icons'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'
import { isUnset } from '@/lib'

export interface DateTimeProps extends DateTimePickerProps, BaseInputProps {
	name?: string
	id?: string
	value?: Date
	onChange?: (value: Date | null) => void
	error?: string | string[]
}

const DateTime = forwardRef<HTMLButtonElement, DateTimeProps>((
	{
		label,
		id,
		name,
		required,
		value,
		size = 'md',
		radius = 'xs',
		valueFormat = 'L LT',
		wrapper,
		wrapperProps,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DateTimePicker
				ref={ ref }
				id={ inputId }
				name={ name }
				value={ isUnset(value) ? null : new Date(value!) }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				leftSection={ <CalendarIcon /> }
				leftSectionPointerEvents="none"
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default DateTime
