import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps as MantineTextInputProps } from '@mantine/core'
import Label from '../Label'

export interface TextInputProps extends MantineTextInputProps {}

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>((
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
