import React from 'react'
import TextInput, { type TextInputProps } from '@/Components/Inputs/TextInput'
import Field from '../Components/Field'
import { useInertiaInput, type NestedObject } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'

interface FormTextInputProps<TForm extends NestedObject>
	extends
	Omit<TextInputProps, InputConflicts>,
	BaseFormInputProps<string, TForm> {}

const TextFormInput = <TForm extends NestedObject>(
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
	}: FormTextInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		onChange?.(value, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		setValue(value)

		onBlur?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="text"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<TextInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.value, form) }
				error={ errorKey ? form.getError(errorKey) : error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default TextFormInput
