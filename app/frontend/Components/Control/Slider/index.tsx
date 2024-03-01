import React from 'react'
import { Slider } from '@/Components'

interface SliderControlProps {
	control: Schema.ControlsShow
}

const SliderControl = ({ control }: SliderControlProps) => {
	return (
		<Slider>{ control.title }</Slider>
	)
}

export default SliderControl
