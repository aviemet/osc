import React from 'react'
import RichTextEditor, { type IRichTextEditorProps } from '../RichTextEditor'
import Label from '../Label'

export interface IRichTextProps extends IRichTextEditorProps {
	label?: React.ReactNode
	required?: boolean
	id?: string
	name?: string
}

const RichText = ( { label, name, required = false, id, ...props }: IRichTextProps) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<RichTextEditor id={ inputId } { ...props } />
		</>
	)
}

export default RichText
