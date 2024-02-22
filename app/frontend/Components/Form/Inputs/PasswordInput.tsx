import React, { forwardRef } from 'react'
import PasswordInput, { type IPasswordInputProps } from '@/Components/Inputs/PasswordInput'
import Field from '../Field'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IPasswordFormInputProps extends Omit<IPasswordInputProps, 'onBlur'|'onChange'|'name'>, IInertiaInputProps {
	field?: boolean
}

const FormInput = forwardRef<HTMLInputElement, IPasswordFormInputProps>((
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		compact = false,
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
			wrapper={ children => (
				<Field
					type="password"
					required={ required }
					className={ cx({ compact }) }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<PasswordInput
				id={ id || inputId }
				className={ cx({ compact }) }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				ref={ ref }
				{ ...props }
			/></ConditionalWrapper>
	)
})

export default FormInput
