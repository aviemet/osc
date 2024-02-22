import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from '../Label'

export interface ITextInputProps extends TextInputProps {}

const TextInputComponent = forwardRef<HTMLInputElement, ITextInputProps>((
	{ name, label, required = false, id, size = 'md', radius = 'xs', ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<TextInput
				ref={ ref }
				name={ name }
				id={ inputId }
				required={ required }
				size={ size }
				radius={ radius }
				{ ...props }
			/>
		</>
	)
})

export default TextInputComponent
