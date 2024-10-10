import React from 'react'
import Base, { ControlSpacerBaseProps } from './Base'

export interface ControlSpacerProps extends ControlSpacerBaseProps{ }

const ControlSpacer = ({ ...props }: ControlSpacerProps) => {
	return <Base { ...props } />
}

export default ControlSpacer
