import React, { forwardRef } from 'react'
import Field from '../Field'
import SwitchInput, { type ISwitchProps } from '@/Components/Inputs/Switch'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IFormSwitchProps extends Omit<ISwitchProps, 'onBlur'|'onChange'|'name'>, IInertiaInputProps {
	field?: boolean
}

const FormSwitchComponent = forwardRef<HTMLInputElement, IFormSwitchProps>((
	{ name, onChange, onBlur, id, required, model, field = true, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onChange) onChange(e, form)
	}

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onBlur) onBlur(e, form)
	}

	return (
		<ConditionalWrapper wrapper={ children => (
			<Field
				type="checkbox"
				required={ required }
				errors={ !!error }
				grid={ false }
			>
				{ children }
			</Field>
		) }
		condition={ field }
		>
			<SwitchInput
				id={ id || inputId }
				name={ inputName }
				defaultChecked={ Boolean(value) }
				checked={ value }
				value={ name }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormSwitchComponent
