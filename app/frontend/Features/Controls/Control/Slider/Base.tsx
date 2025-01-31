import React from "react"
import { Slider } from "@/Components"
import { ControlProps } from ".."
import { controlRoute, controlTitle } from "../lib"

export type ControlSliderBaseProps = ControlProps & {}

const SliderControl = ({ control, ...props }: ControlSliderBaseProps) => {
	const route = controlRoute(control)

	return (
		<Slider { ...props }>
			{ controlTitle(control) }
		</Slider>
	)
}

export default SliderControl
