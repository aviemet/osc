import React, { forwardRef } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'
import Label from '../Label'

export interface INumberInputProps extends NumberInputProps {}

const NumberInputComponent = forwardRef<HTMLInputElement, INumberInputProps>((
	{ label, name, required = false, value, id, size = 'md', ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<NumberInput
				id={ inputId }
				value={ Number(value) }
				required={ required }
				ref={ ref }
				size={ size }
				{ ...props }
			/>
		</>
	)
})

export default NumberInputComponent
