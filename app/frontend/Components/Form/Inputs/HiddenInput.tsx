import React, { forwardRef } from 'react'
import { HiddenInput } from '@/Components/Inputs'
import { useInertiaInput } from 'use-inertia-form'
import { InputProps } from 'react-html-props'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormHiddenInputProps
	extends
	Omit<InputProps, InputConflicts>,
	Omit<BaseFormInputProps, 'onFocus'|'onBlur'> {}

const FormInput = forwardRef<HTMLInputElement, FormHiddenInputProps>((
	{ name, model, onChange, id, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue } = useInertiaInput({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		if(onChange) onChange(value, form)
	}

	return (
		<HiddenInput
			id={ id || inputId }
			name={ inputName }
			value={ value }
			onChange={ handleChange }
			ref={ ref }
			{ ...props }
		/>
	)
})

export default FormInput
