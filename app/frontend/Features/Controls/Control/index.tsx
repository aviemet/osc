import React, { forwardRef } from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'
import { ConditionalWrapper, Box } from '@/Components'

import cx from 'clsx'
import * as classes from './Control.css'

export interface ControlProps extends BoxProps {
	children?: React.ReactNode
	control: Schema.ControlsShow | Schema.ControlsEdit
	edit?: true | undefined
	wrapper?: boolean
	disable?: boolean
}

const Control = ({ control, wrapper = true, className, ...props }: ControlProps) => {
	const sharedProps = {
		control,
		m: "xs",
		className: cx(className),
	}

	let ControlComponent

	switch(control.control_type) {
		case 'button':
			ControlComponent = ButtonControl
			break;

			/*
		case 'slider':
			ControlComponent = SliderControl
			break;
		*/

		case 'spacer':
			ControlComponent = SpacerControl
			break;

		default:
			ControlComponent = React.Fragment
	}

	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ children => <Box className={ cx(classes.controlWrapper) }>{ children }</Box> }
		>
			<ControlComponent { ...sharedProps } { ...props } />
		</ConditionalWrapper>
	)
}

export default Control
