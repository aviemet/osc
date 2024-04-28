import React, { forwardRef } from 'react'
import Field from '../Field'
import CheckboxInput, { type CheckboxProps } from '@/Components/Inputs/Checkbox'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormCheckboxProps
	extends
	Omit<CheckboxProps, InputConflicts>,
	Omit<BaseFormInputProps<boolean>, 'onFocus'> {}

const FormCheckboxComponent = forwardRef<HTMLInputElement, FormCheckboxProps>((
	{
		name,
		onChange,
		onBlur,
		id,
		required,
		className,
		model,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		setValue(checked)
		onChange?.(checked, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="checkbox"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<CheckboxInput
				id={ id || inputId }
				className={ className }
				name={ inputName }
				value={ name }
				checked={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormCheckboxComponent
