import React from 'react'
import Base, { type ControlSpacerBaseProps } from './Base'

type ControlSpacerProps = ControlSpacerBaseProps & {
	edit?: false
	control: Schema.ControlsShow
}

const ControlSpacer = ({ ...props }: ControlSpacerProps) => {
	return <Base { ...props } />
}

export default ControlSpacer
