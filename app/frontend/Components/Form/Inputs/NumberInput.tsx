import React, { forwardRef } from 'react'
import NumberInput, { type INumberInputProps } from '@/Components/Inputs/NumberInput'
import Field from '../Field'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface INumberFormInputProps extends Omit<INumberInputProps, 'onBlur'|'onChange'|'name'>, IInertiaInputProps {
	field?: boolean
}

const FormInput = forwardRef<HTMLInputElement, INumberFormInputProps>((
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		compact = false,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (e: number) => {
		const v = e
		setValue(v)

		if(onChange) onChange(v, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		if(onBlur) onBlur(value as number, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="number"
					required={ required }
					className={ cx({ compact }) }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<NumberInput
				id={ id || inputId }
				className={ cx({ compact }) }
				name={ inputName }
				value={ value as number }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormInput
