import React from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'

export interface ControlProps extends BoxProps {
	control: Schema.Control
	edit?: boolean
}

const Control = ({ control, ...props }: ControlProps) => {
	switch(control.control_type) {
		case 'button':
			return (
				<ButtonControl
					control={ control }
					m="xs"
					{ ...props }
				>
					{ control.title }
				</ButtonControl>
			)
		case 'slider':
			return (
				<SliderControl
					control={ control }
					m="xs"
					{ ...props }
				>
					{ control.title }
				</SliderControl>
			)
		case 'spacer':
			return (
				<SpacerControl
					control={ control }
					m="xs"
					{ ...props }
				>
				</SpacerControl>
			)
		default:
			return <></>
	}
}

export default Control

export { default as EditControl } from './EditControl'
