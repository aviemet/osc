import React from 'react'
import Base, { type ControlButtonBaseProps } from './Base'

export interface EditControlButtonProps extends ControlButtonBaseProps {}

const EditControlButton = ({ ...props }: EditControlButtonProps) => {
	return <Base { ...props } />
}

export default EditControlButton
