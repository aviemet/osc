import React from 'react'
import SegmentedControl, { type SegmentedControlProps } from '@/Components/Inputs/SegmentedControl'
import Field from '../Components/Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'

interface FormSegmentedControlProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<SegmentedControlProps, InputConflicts>,
	BaseFormInputProps<string, TForm> {}

const FormSegmentedControl = <TForm extends NestedObject = NestedObject>({
	options,
	name,
	id,
	model,
	onChange,
	onBlur,
	onFocus,
	required,
	field = true,
	wrapperProps,
	errorKey,
	defaultValue,
	clearErrorsOnChange,
	...props
}: FormSegmentedControlProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

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
			condition={ field }
			wrapper={ children => (
				<Field
					type="radio"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<SegmentedControl
				options={ options }
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ handleFocus }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormSegmentedControl
