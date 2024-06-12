import React, { forwardRef } from 'react'
import ButtonControl from './Button'
import SliderControl from './Slider'
import SpacerControl from './Spacer'
import { type BoxProps } from '@mantine/core'

import cx from 'clsx'
import * as classes from './Control.css'
// import { ConditionalWrapper } from '@/Components'

interface BaseControlProps extends BoxProps {
	children?: React.ReactNode
}

type ShowControlProps = BaseControlProps & {
	edit?: false | undefined
	control: Schema.ControlsShow
}

type EditControlProps = BaseControlProps & {
	edit?: true
	control: Schema.ControlsFormData
}

export type ControlProps<T = { edit: undefined }> =
	T extends { edit: true }
		? EditControlProps
		: ShowControlProps

const Control = forwardRef<HTMLButtonElement,ControlProps>((
	{ control, edit, className, ...props },
	ref,
) => {
	const sharedProps = {
		className: cx(className),
		ref,
	}

	switch(control.control_type) {
		case 'button':
			return (
				<ButtonControl
					edit={ edit }
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

// const WrappedControl = ({ edit, ...props }) => {
// 	<ConditionalWrapper
// 		condition={ edit }
// 		wrapper={ children => (

// 		)}
// 	>

// 	</ConditionalWrapper>
// }
