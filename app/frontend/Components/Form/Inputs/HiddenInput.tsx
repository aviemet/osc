import React from 'react'
import { HiddenInput } from '@/Components/Inputs'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import { InputProps } from 'react-html-props'
import { type InputConflicts, type BaseFormInputProps } from '.'

type OmittedHiddenInputProps = 'onBlur'|'onFocus'|'wrapperProps'
interface HiddenInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<InputProps, InputConflicts|OmittedHiddenInputProps>,
	Omit<BaseFormInputProps<string, TForm>, 'span'|OmittedHiddenInputProps> {}

const FormInput = <TForm extends NestedObject = NestedObject>(
	{ name, model, onChange, id, defaultValue, ...props }: HiddenInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue } = useInertiaInput<string, TForm>({
		name,
		model,
		defaultValue,
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		onChange?.(value, form)
	}

	return (
		<HiddenInput
			id={ id || inputId }
			name={ inputName }
			value={ value }
			onChange={ handleChange }
			{ ...props }
		/>
	)
}

export default FormInput
