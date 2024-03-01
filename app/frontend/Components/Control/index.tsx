import React from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'

interface ControlProps {
	control: Schema.ControlsShow
}

const Control = ({ control }: ControlProps) => {
	switch(control.control_type) {
		case 'button':
			return <ButtonControl control={ control } />
		case 'slider':
			return <SliderControl control={ control } />
		case 'spacer':
			return <SpacerControl control={ control } />
		default:
			return <></>
	}
}

export default Control
