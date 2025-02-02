import { Box } from "@/Components"
import { type ControlProps } from ".."

import cx from "clsx"

const ControlSpacerBase = ({ control, className, ...props }: ControlProps) => {
	return (
		<Box
			{ ...props }
			className={ cx(className, "spacer") }
		/>
	)
}

export default ControlSpacerBase
