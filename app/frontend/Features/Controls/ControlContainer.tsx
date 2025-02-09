import { Box } from "@/Components"

import cx from "clsx"
import * as classes from "./Controls.css"

interface ControlContainerProps {
	children: React.ReactNode
	className?: string
	columns?: number
}

const ControlContainer = ({ children, className, columns = 6 }: ControlContainerProps) => {
	return (
		<Box className={ cx(
			classes.controlContainer,
			className
		) }>
			{ children }
		</Box>
	)
}

export default ControlContainer
