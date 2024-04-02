import React, { forwardRef } from 'react'
import NumberInput, { type NumberInputProps } from '@/Components/Inputs/NumberInput'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormNumberInputProps extends Omit<NumberInputProps, InputConflicts>, BaseFormInputProps<number> {}

const FormInput = forwardRef<HTMLInputElement, FormNumberInputProps>((
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
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<number>({ name, model })

	const handleChange = (val: string|number) => {
		setValue(Number(val))

		onChange?.(Number(val), form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="number"
					required={ required }
					errors={ !!error }
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
				ref={ ref }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormInput
