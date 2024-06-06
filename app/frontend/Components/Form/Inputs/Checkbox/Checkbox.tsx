import React from 'react'
import { useInertiaInput, type NestedObject } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { Field } from '@/Components/Form'
import CheckboxInput, { type CheckboxProps } from '@/Components/Inputs/Checkbox'
import FormCheckboxGroup from './Group'
import { type InputConflicts, type BaseFormInputProps } from '..'

export interface FormCheckboxProps<TForm extends NestedObject>
	extends
	Omit<CheckboxProps, InputConflicts>,
	BaseFormInputProps<boolean, TForm> {}

const FormCheckboxComponent = <TForm extends NestedObject>(
	{
		name,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		className,
		model,
		field = true,
		style,
		wrapperProps,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
		...props
	}: FormCheckboxProps<TForm>,
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

	const handleBlur = () => {
		onBlur?.(value, form)
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
			<CheckboxInput
				id={ id || inputId }
				className={ className }
				name={ inputName }
				value={ name }
				checked={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.checked, form) }
				error={ error }
				style={ [{ padding: '14px 10px' }, style] }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

FormCheckboxComponent.Group = FormCheckboxGroup

export default FormCheckboxComponent
