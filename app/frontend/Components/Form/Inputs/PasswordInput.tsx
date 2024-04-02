import React, { forwardRef } from 'react'
import PasswordInput, { type PasswordInputProps } from '@/Components/Inputs/PasswordInput'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormPasswordInputProps extends Omit<PasswordInputProps, InputConflicts>, BaseFormInputProps {}

const FormInput = forwardRef<HTMLInputElement, FormPasswordInputProps>((
	{
		name,
		model,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		if(onChange) onChange(value, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		setValue(value)

		if(onBlur) onBlur(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="password"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
		>
			<PasswordInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.value, form) }
				error={ error }
				ref={ ref }
				{ ...props }
			/></ConditionalWrapper>
	)
})

export default FormInput
