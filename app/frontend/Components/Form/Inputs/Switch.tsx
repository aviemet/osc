import React, { forwardRef } from 'react'
import Field from '../Field'
import SwitchInput, { type SwitchProps } from '@/Components/Inputs/Switch'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormSwitchProps extends Omit<SwitchProps, InputConflicts>, BaseFormInputProps<boolean> {}

const FormSwitchComponent = forwardRef<HTMLInputElement, FormSwitchProps>((
	{
		name,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		model,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.checked
		setValue(value)

		onChange?.(value, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.checked
		setValue(value)

		onBlur?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="checkbox"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
		>
			<SwitchInput
				ref={ ref }
				id={ id || inputId }
				name={ inputName }
				defaultChecked={ Boolean(value) }
				checked={ value }
				value={ name }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.checked, form) }
				error={ error }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormSwitchComponent
