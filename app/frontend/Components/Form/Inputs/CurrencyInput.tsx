import React from 'react'
import CurrencyInput, { type CurrencyInputProps } from '@/Components/Inputs/CurrencyInput'
import Field from '../Components/Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { InputConflicts, type BaseFormInputProps } from '.'
import { type  Money } from '@/types'
import { useCurrency } from '@/lib/hooks'

interface INumberInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<CurrencyInputProps, InputConflicts>,
	BaseFormInputProps<number, TForm>
{

}

const FormInput = <TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		field = true,
		wrapperProps,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
		...props
	} : INumberInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<number|Money, TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const [amount, formatter] = useCurrency({
		amount: value,
	})

	const handleChange = (value: string|number) => {
		const numberValue = Number(value)
		setValue(numberValue)

		onChange?.(numberValue, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = Number(e.target.value)
		setValue(value)

		onBlur?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="text"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<CurrencyInput
				id={ id || inputId }
				name={ inputName }
				value={ formatter.format(amount) }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(Number(e.target.value), form) }
				error={ error }
				wrapper={ false }
				{ ...props }
			/></ConditionalWrapper>
	)
}

export default FormInput
