import React from 'react'
import Field from '../Field'
import TextareaInput, { type ITextareaProps } from '@/Components/Inputs/Textarea'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IFormTextareaProps extends Omit<ITextareaProps, 'onBlur'|'onChange'|'name'>, IInertiaInputProps {
	field?: boolean
}

const Textarea = ({
	label,
	name,
	required,
	onChange,
	onBlur,
	id,
	model,
	errorKey,
	field = true,
	...props
}: IFormTextareaProps) => {
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
			wrapper={ children => (
				<Field
					type="textarea"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ props.hidden !== true && field }
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
					value={ value }
					required={ required }
					error={ errorKey ? form.getError(errorKey) : error }
					{ ...props }
				>
				</TextareaInput>
			</>
		</ConditionalWrapper>
	)
}

export default Textarea
