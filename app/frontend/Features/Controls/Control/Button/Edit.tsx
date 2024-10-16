import React from 'react'
import Base, { type ControlButtonBaseProps } from './Base'

export type EditControlButtonProps = ControlButtonBaseProps & {
	edit: true
	control: Schema.ControlsFormData
}

const EditControlButton = ({ ...props }: EditControlButtonProps) => {
	return <Base { ...props } />
}

export default EditControlButton
