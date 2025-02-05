import React from "react"
import ButtonControl from "./components/Button"
import SliderControl from "./components/Slider"
import SpacerControl from "./components/Spacer"

import cx from "clsx"
import { Box, ConditionalWrapper } from "@/Components"

export interface ControlProps {
	control: Schema.ControlsFormData | Schema.ControlsShow
	disable?: boolean
	className?: string
	onClick?: (e: React.MouseEvent) => void
	wrapper?: boolean
}

type ControlComponent =  (props: ControlProps & {
	control: Schema.ControlsFormData | Schema.ControlsShow
}) => React.ReactNode

const CONTROL_COMPONENTS: Record<Schema.Control["control_type"], ControlComponent> = {
	button: ButtonControl,
	slider: SliderControl,
	spacer: SpacerControl,
} as const


const Control = ({ control, wrapper = true, className, ...props }: ControlProps) => {
	const ControlComponent = CONTROL_COMPONENTS[control.control_type] || React.Fragment

	// Conditional wrapper is disabled in edit mode so draggable wrapper can assume wrapper CSS classes
	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ (children) => (
				<Box className={ cx(className, "control-wrapper") }>
					{ children }
				</Box>
			) }
		>
			<ControlComponent
				control={ control }
				className={ cx(className, "control") }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default Control
