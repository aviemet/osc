import React from 'react'
import RichTextEditor, { type RichTextEditorProps } from '../RichTextEditor'
import Label from '../Label'

export interface RichTextInputProps extends RichTextEditorProps {
	label?: React.ReactNode
	required?: boolean
	id?: string
	name?: string
	value?: string
}

const RichText = ( { label, name, required = false, id, value = '', ...props }: RichTextInputProps) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<RichTextEditor id={ inputId } { ...props }>{ value }</RichTextEditor>
		</>
	)
}

export default RichText
