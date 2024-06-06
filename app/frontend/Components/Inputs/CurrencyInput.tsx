import React, { forwardRef } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'
import Label from './Label'
import InputWrapper from './InputWrapper'
import { type BaseInputProps } from '.'

export interface CurrencyInputProps
	extends
	NumberInputProps,
	BaseInputProps
{
	symbol?: string|React.ReactNode
}

const NumberInputComponent = forwardRef<HTMLInputElement, CurrencyInputProps>((
	{
		label,
		name,
		required = false,
		id,
		pattern,
		size = 'md',
		symbol = '$',
		wrapper,
		wrapperProps,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<NumberInput
				id={ inputId }
				required={ required }
				ref={ ref }
				size={ size }
				name={ name }
				leftSection={ symbol }
				hideControls
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default NumberInputComponent
