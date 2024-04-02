import React, { forwardRef } from 'react'
import { Textarea, type TextareaProps as MantineTextareaProps } from '@mantine/core'
import Label from '../Label'

export interface TextareaProps extends MantineTextareaProps { }

const TextareaComponent = forwardRef<HTMLTextAreaElement, TextareaProps>((
	{ label, name, required = false, value, id, radius = 'xs', ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Textarea
				ref={ ref }
				id={ inputId }
				name={ name }
				value={ value ? String(value) : '' }
				required={ required }
				radius={ radius }
				{ ...props }
			>
			</Textarea>
		</>
	)
})

export default TextareaComponent
