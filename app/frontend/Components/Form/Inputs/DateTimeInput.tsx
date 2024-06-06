import React from 'react'
import Field from '../Components/Field'
import DateTimeInput, { type DateTimeProps } from '@/Components/Inputs/DateTimeInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'
import { isUnset } from '@/lib'

interface DateTimeFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<DateTimeProps, InputConflicts>,
	BaseFormInputProps<Date|'', TForm> {}

const DateTime = <TForm extends NestedObject = NestedObject>({
	name,
	required,
	onChange,
	onBlur,
	onFocus,
	id,
	model,
	field = true,
	wrapperProps,
	errorKey,
	defaultValue,
	clearErrorsOnChange,
	...props
}: DateTimeFormProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date|'', TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const handleChange = (date: Date|null) => {
		const dateWithValidEmptyType = (isUnset(date) ? '' : date)

		setValue(dateWithValidEmptyType)

		onChange?.(dateWithValidEmptyType, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	const handleFocus = () => {
		onFocus?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="date"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ value === '' ? undefined : value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ handleFocus }
				required={ required }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default DateTime
