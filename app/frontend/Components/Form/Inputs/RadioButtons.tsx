import React from 'react'
import RadioButtons, { type RadioButtonsProps } from '@/Components/Inputs/RadioButtons'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormRadioButtonsProps extends Omit<RadioButtonsProps, InputConflicts>, BaseFormInputProps {}

const FormRadioButtons = ({
	options,
	name,
	id,
	model,
	onChange,
	onBlur,
	onFocus,
	required,
	field = true,
	...props
}: FormRadioButtonsProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (v: string) => {
		setValue(v)
		onChange?.(v, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
		onBlur?.(value, form)
	}

	const handleFocus = (e: React.FocusEvent<HTMLDivElement, Element>) => {
		onFocus?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="radio"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
		>
			<RadioButtons
				options={ options }
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ handleFocus }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormRadioButtons
