import React from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'

export interface CommonControlProps extends BoxProps {
	control?: Schema.ControlsShow
	edit?: boolean
}

interface ControlAutoTypeProps extends BoxProps {
	control: Schema.ControlsShow
	edit?: boolean
}

const Control = ({ control, ...props }: ControlAutoTypeProps) => {
	switch(control.control_type) {
		case 'button':
			return (
				<ButtonControl
					protocol={ control.protocol }
					m="xs"
					{ ...props }
				>
					{ control.title }
				</ButtonControl>
			)
		case 'slider':
			return (
				<SliderControl
					protocol={ control.protocol }
					m="xs"
					{ ...props }
				>
					{ control.title }
				</SliderControl>
			)
		case 'spacer':
			return (
				<SpacerControl
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
