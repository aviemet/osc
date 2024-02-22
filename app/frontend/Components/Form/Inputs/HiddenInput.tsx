import React, { forwardRef } from 'react'
import { HiddenInput } from '@/Components/Inputs'
import { useInertiaInput } from 'use-inertia-form'
import { InputProps } from 'react-html-props'

interface ITextInputProps extends Omit<InputProps, 'name'|'ref'|'onBlur'|'onChange'>, IInertiaInputProps {
	name: string
	model?: string
}

const FormInput = forwardRef<HTMLInputElement, ITextInputProps>((
	{ name, model, onChange, onBlur, id, ...props },
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
