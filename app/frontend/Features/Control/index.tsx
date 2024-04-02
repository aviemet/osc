import React from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'

export interface ControlProps extends BoxProps {
	control: Schema.ControlsShow
	edit?: boolean
}

const Control = ({ control, ...props }: ControlProps) => {
	switch(control.control_type) {
		case 'button':
			return <ButtonControl control={ control } { ...props } m="xs" />
		case 'slider':
			return <SliderControl control={ control } { ...props } m="xs" />
		case 'spacer':
			return <SpacerControl control={ control } { ...props } m="xs" />
		default:
			return <></>
	}
}

export default Control

export { default as EditControl } from './EditControl'
