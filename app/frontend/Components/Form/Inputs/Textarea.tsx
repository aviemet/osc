import React from 'react'
import Field from '../Components/Field'
import TextareaInput, { type TextareaProps } from '@/Components/Inputs/Textarea'
import cx from 'clsx'
import { useInertiaInput, type NestedObject } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { InputConflicts, type BaseFormInputProps } from '.'

interface FormTextareaProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<TextareaProps, InputConflicts>,
	BaseFormInputProps<string, TForm> {}

const Textarea = <TForm extends NestedObject = NestedObject>(
	{
		label,
		name,
		required,
		onChange,
		onBlur,
		onFocus,
		id,
		model,
		field = true,
		wrapperProps,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
		...props
	}: FormTextareaProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
		onChange?.(e.target.value, form)
	}
	const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if(onBlur) onBlur(e.target.value, form)
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
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
				<TextareaInput
					id={ id || inputId }
					name={ inputName }
					onChange={ handleChange }
					onBlur={ handleBlur }
					onFocus={ e => onFocus?.(e.target.value, form) }
					value={ value }
					required={ required }
					error={ errorKey ? form.getError(errorKey) : error }
					wrapper={ false }
					{ ...props }
				>
				</TextareaInput>
			</>
		</ConditionalWrapper>
	)
}

export default Textarea
