import React, { forwardRef } from 'react'
import { PasswordInput, type PasswordInputProps as MantineMantineRichTextEditorProps } from '@mantine/core'
import Label from '../Label'

export interface PasswordInputProps extends MantineMantineRichTextEditorProps {}

const PasswordInputComponent = forwardRef<HTMLInputElement, PasswordInputProps>((
	{ label, name, required = false, id, size = 'md', ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<PasswordInput
				id={ inputId }
				required={ required }
				ref={ ref }
				size={ size }
				{ ...props }
			/>
		</>
	)
})

export default PasswordInputComponent
