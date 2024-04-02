import React from 'react'
import Field from '../Field'
import DateTimeInput, { type DateTimeInputProps } from '@/Components/Inputs/DateTime'
import { UseFormProps, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface IDateTimeFormProps
	extends
	Omit<DateTimeInputProps, InputConflicts>,
	Omit<BaseFormInputProps, InputConflicts> {

	name: string
	onChange: (date: Date, form: UseFormProps) => void
	onBlur: (date: Date, form: UseFormProps) => void
	onFocus: (date: Date, form: UseFormProps) => void
}

const DateTime = ({
	name,
	required,
	onChange,
	onBlur,
	onFocus,
	id,
	model,
	field = true,
	...props
}: IDateTimeFormProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date>({ name, model })

	const handleChange = (date: Date) => {
		setValue(date)

		onChange?.(date, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	const handleFocus = () => {
		onFocus?.(value, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="date"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ handleFocus }
				required={ required }
				error={ error }
				{ ...props }
			/></ConditionalWrapper>
	)
}

export default DateTime
