import React from "react"
import { Box } from "@/Components"
import { type ControlProps } from ".."

import cx from "clsx"

export type ControlSpacerBaseProps = ControlProps & {}

const ControlSpacerBase = ({ control, disable, className, ...props }: ControlSpacerBaseProps) => {
	return (
		<Box
			{ ...props }
			className={ cx(className, "slider") }
		/>
	)
}

export default ControlSpacerBase
