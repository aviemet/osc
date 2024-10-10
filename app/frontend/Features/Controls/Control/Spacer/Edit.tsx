import React from 'react'
import Base, { type ControlSpacerBaseProps } from './Base'

export interface EditControlSpacerProps extends ControlSpacerBaseProps {}

const EditControlSpacer = ({ ...props }: EditControlSpacerProps) => {
	return <Base { ...props } />
}

export default EditControlSpacer
