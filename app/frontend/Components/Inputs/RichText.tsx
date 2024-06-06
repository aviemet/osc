import React, { forwardRef } from 'react'
import RichTextEditor, { type RichTextEditorProps } from '../RichTextEditor'
import Label from './Label'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface RichTextInputProps extends RichTextEditorProps, BaseInputProps {
	label?: React.ReactNode
	value: string
	required?: boolean
	id?: string
	name?: string
}

const RichText = forwardRef<HTMLDivElement, RichTextInputProps>((
	{
		label,
		name,
		required = false,
		id,
		value,
		wrapper,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<RichTextEditor ref={ ref } id={ inputId } { ...props }>
				{ value }
			</RichTextEditor>
		</InputWrapper>
	)
})

export default RichText
