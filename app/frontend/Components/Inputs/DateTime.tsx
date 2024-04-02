import React from 'react'
import Label from '../Label'
import { DateTimePicker, type DateTimePickerProps as MantineDateTimePickerProps } from '@mantine/dates'
import { isEmpty } from 'lodash'

export interface DateTimeInputProps extends MantineDateTimePickerProps {
	name?: string
	id?: string
	value?: Date
	onChange?: (value: Date) => void
	error?: string | string[]
}

const DateTime = ({
	label,
	id,
	name,
	required,
	value = new Date(),
	size = 'md',
	radius = 'xs',
	valueFormat = 'L LT',
	...props
}: DateTimeInputProps) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DateTimePicker
				id={ inputId }
				name={ name }
				value={ isEmpty(value) ? null : new Date(value) }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				{ ...props }
			/>
		</>
	)
}

export default DateTime

