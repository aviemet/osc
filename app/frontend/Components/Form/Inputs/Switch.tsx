import React from 'react'
import Field from '../Components/Field'
import SwitchInput, { type SwitchProps } from '@/Components/Inputs/Switch'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'

interface FormSwitchProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<SwitchProps, InputConflicts>,
	BaseFormInputProps<boolean, TForm> {}

const FormSwitchComponent = <TForm extends NestedObject = NestedObject>(
	{
		name,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		model,
		field = true,
		wrapperProps,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
		...props
	}: FormSwitchProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean, TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		onChange?.(e.target.checked, form)
	}

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onBlur) onBlur(e.target.checked, form)
	}

	return (
		<ConditionalWrapper

			condition={ field }
			wrapper={ children => (
				<Field
					type="checkbox"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<SwitchInput
				id={ id || inputId }
				name={ inputName }
				defaultChecked={ Boolean(value) }
				checked={ value }
				value={ name }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.checked, form) }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormSwitchComponent
