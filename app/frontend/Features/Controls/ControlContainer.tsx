import { Box } from "@/Components"

import cx from "clsx"
import * as classes from "./Controls.css"

interface ControlContainerProps {
	children: React.ReactNode
	className?: string
}

const ControlContainer = ({ children, className }: ControlContainerProps) => {
	return (
		<Box className={ cx(classes.controlContainer, className) }>
			{ children }
		</Box>
	)
}

export default ControlContainer
