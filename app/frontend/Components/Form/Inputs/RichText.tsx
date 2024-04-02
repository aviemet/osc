import React from 'react'
import Field from '../Field'
import RichTextInput, { type RichTextInputProps } from '@/Components/Inputs/RichText'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type BaseFormInputProps, type InputConflicts } from '.'

interface FormRichTextInputProps extends Omit<RichTextInputProps, InputConflicts>, BaseFormInputProps {}

const RichText = ({
	label,
	name,
	required = false,
	id,
	onChange,
	onBlur,
	onFocus,
	model,
	field = true,
	...props
}: FormRichTextInputProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (v: string) => {
		setValue(v)
		onChange?.(v, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form )
	}

	const handleFocus = () => {
		onFocus?.(value, form )
	}

	return (
		<ConditionalWrapper
			condition={ props.hidden !== true && field }
			wrapper={ children => (
				<Field
					type="textarea"
					required={ required }
					errors={ !!error }
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
					onFocus={ handleFocus }
					value={ value }
					{ ...props }
				/>
			</>
		</ConditionalWrapper>
	)
}

export default RichText
