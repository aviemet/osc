import React from 'react'
import { Slider } from '@/Components'
import { type ControlProps } from '..'

const SliderControl = ({ control, edit = false, ...props }: ControlProps) => {
	return (
		<Slider { ...props }>{ control.title }</Slider>
	)
}

export default SliderControl
