import React from 'react'
import Base, { type ControlSliderBaseProps } from './Base'

type ControlSliderProps = ControlSliderBaseProps & {
	edit?: false
	control: Schema.ControlsShow
}

const ControlSlider = ({ ...props }: ControlSliderProps) => {
	return <Base { ...props } />
}

export default ControlSlider
