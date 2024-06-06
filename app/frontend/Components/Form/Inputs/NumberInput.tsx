import React from 'react'
import NumberInput, { type NumberInputProps } from '@/Components/Inputs/NumberInput'
import Field from '../Components/Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'

interface FormNumberInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<NumberInputProps, InputConflicts>,
	BaseFormInputProps<number, TForm> {}

const FormInput = <TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		field = true,
		wrapperProps,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
		...props
	}: FormNumberInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<number, TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const handleChange = (val: string|number) => {
		const v = Number(val)
		setValue(v)

		onChange?.(v, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="number"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<NumberInput
				id={ id || inputId }
				name={ inputName }
				value={ value as number }
				onChange={ handleChange }
				onBlur={ () => onBlur?.(value, form) }
				onFocus={ () => onFocus?.(value, form) }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormInput
