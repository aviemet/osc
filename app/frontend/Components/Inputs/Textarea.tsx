import React from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'
import Label from '../Label'

export interface ITextareaProps extends TextareaProps { }

const TextareaComponent = ({ label, name, required = false, value, id, radius = 'xs', ...props }: ITextareaProps) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Textarea
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
}

export default TextareaComponent
