import React from "react"
import ButtonControl from "./components/Button"
import SliderControl from "./components/Slider"
import SpacerControl from "./components/Spacer"

import cx from "clsx"

export interface ControlProps {
	control: Schema.ControlsFormData | Schema.ControlsShow
	disable?: boolean
	className?: string
	onClick?: (e: React.MouseEvent) => void
}

type ControlComponent =  (props: ControlProps & {
	control: Schema.ControlsFormData | Schema.ControlsShow
}) => React.ReactNode

const CONTROL_COMPONENTS: Record<Schema.Control["control_type"], ControlComponent> = {
	button: ButtonControl,
	slider: SliderControl,
	spacer: SpacerControl,
} as const


const Control = ({ control, className, ...props }: ControlProps) => {
	const ControlComponent = CONTROL_COMPONENTS[control.control_type] || React.Fragment

	return (
		<ControlComponent
			control={ control }
			className={ cx(className, "control") }
			{ ...props }
		/>
	)
}

export default Control
