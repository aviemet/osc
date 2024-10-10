import React from 'react'
import ButtonControl from './Button'
// import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'
import { ConditionalWrapper, Box } from '@/Components'
import EditControlWrapper from './EditControlWrapper'

import cx from 'clsx'
import * as classes from '../Controls.css'

export interface ControlProps extends BoxProps {
	children?: React.ReactNode
	control: Schema.ControlsShow | Schema.ControlsEdit
	edit?: true | undefined
	wrapper?: boolean
	disable?: boolean
}

const Control = ({ control, edit, wrapper = true, className, ...props }: ControlProps) => {
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
			condition={ !edit || wrapper }
			wrapper={ children => <Box className={ cx(classes.controlWrapper) }>{ children }</Box> }
		>
			<ConditionalWrapper
				condition={ !edit || wrapper }
				wrapper={ children => <EditControlWrapper control={ control }>{ children }</EditControlWrapper> }
			>
				<ControlComponent { ...sharedProps } { ...props } />
			</ConditionalWrapper>
		</ConditionalWrapper>
	)
}

export default Control
