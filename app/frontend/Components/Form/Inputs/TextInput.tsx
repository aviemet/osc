import React, { forwardRef } from 'react'
import TextInput, { type TextInputProps } from '@/Components/Inputs/TextInput'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormTextInputProps extends Omit<TextInputProps, InputConflicts>, BaseFormInputProps {}

const FormInput = forwardRef<HTMLInputElement, FormTextInputProps>((
	{
		name,
		model,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		errorKey,
		field = true,
		wrapperProps,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

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
				ref={ ref }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormInput
