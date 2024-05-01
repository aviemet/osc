import React from 'react'
import { Slider } from '@/Components'
import { type SliderProps } from '@mantine/core'
import { ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'

interface SliderControlProps extends SliderProps, ControlProps {}

const SliderControl = ({ edit, control, ...props }: SliderControlProps) => {
	const route = controlRoute(control)

	return (
		<Slider { ...props }>
			{ controlTitle(control) }
		</Slider>
	)
}

export default SliderControl
