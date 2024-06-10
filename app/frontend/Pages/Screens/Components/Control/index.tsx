import React, { forwardRef } from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'

import cx from 'clsx'
import * as classes from './Control.css'

interface BaseControlProps extends BoxProps {
	children?: React.ReactNode
}

type ShowControlProps = {
	edit?: false | undefined
	control: Schema.ControlsShow
}

type EditControlProps = {
	edit?: true
	control: Schema.ControlsFormData
}

export type ControlProps = BaseControlProps & (ShowControlProps | EditControlProps);

const Control = forwardRef<HTMLButtonElement,ControlProps >((
	{ control, className, ...props },
	ref,
) => {
	const sharedProps = {
		className: cx(className, { [classes.editControl]: props.edit }),
		ref,
	}

	switch(control.control_type) {
		case 'button':
			return (
				<ButtonControl
					control={ control }
					m="xs"
					{ ...sharedProps }
					{ ...props }
				/>
			)

		case 'slider':
			return (
				<SliderControl
					control={ control }
					m="xs"
					{ ...sharedProps }
					{ ...props }
				/>
			)

		case 'spacer':
			return (
				<SpacerControl
					control={ control }
					m="xs"
					{ ...sharedProps }
					{ ...props }
				>
				</SpacerControl>
			)

		default:
			return <></>
	}
})

export default Control
