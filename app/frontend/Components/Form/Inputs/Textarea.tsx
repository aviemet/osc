import React, { forwardRef } from 'react'
import Field from '../Field'
import TextareaInput, { type TextareaProps } from '@/Components/Inputs/Textarea'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormTextareaProps extends Omit<TextareaProps, InputConflicts>, BaseFormInputProps {}

const Textarea = forwardRef<HTMLTextAreaElement,FormTextareaProps>((
	{
		name,
		required,
		onChange,
		onBlur,
		onFocus,
		id,
		model,
		errorKey,
		field = true,
		wrapperProps,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
		if(onChange) onChange(e.target.value, form)
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
			<TextareaInput
				ref={ ref }
				id={ id || inputId }
				name={ inputName }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.value, form) }
				value={ value }
				required={ required }
				error={ errorKey ? form.getError(errorKey) : error }
				{ ...props }
			>
			</TextareaInput>
		</ConditionalWrapper>
	)
})

export default Textarea
