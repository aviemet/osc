import React from 'react'
import Field from '../Components/Field'
import RichTextInput, { type RichTextInputProps } from '@/Components/Inputs/RichText'
import cx from 'clsx'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'

interface FormRichTextInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<RichTextInputProps, InputConflicts>,
	BaseFormInputProps<string, TForm> {}

const RichText = <TForm extends NestedObject = NestedObject>({
	label,
	name,
	required = false,
	id,
	onChange,
	onBlur,
	onFocus,
	model,
	field = true,
	wrapperProps,
	errorKey,
	defaultValue,
	clearErrorsOnChange,
	...props
}: FormRichTextInputProps<TForm>) => {
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

	const handleBlur = () => {
		onBlur?.(value, form )
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="textarea"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<>
				{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
					{ label }
				</label> }
				<RichTextInput
					id={ id }
					name={ inputName }
					onChange={ handleChange }
					onBlur={ handleBlur }
					onFocus={ () => onFocus?.(value, form ) }
					value={ value }
					wrapper={ false }
					{ ...props }
				/>
			</>
		</ConditionalWrapper>
	)
}

export default RichText
