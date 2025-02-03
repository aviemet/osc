import React from "react"
import axios from "axios"
import { Button } from "@/Components"
import { useLocalStorage } from "@/lib/hooks"
import { controlRoute } from "../lib"
import { type ControlProps } from ".."

import cx from "clsx"
import * as classes from "../../Controls.css"

const ControlButton = ({
	control,
	disable,
	className,
	...props
}: ControlProps) => {
	const [lastButtonClicked, setLastButtonClicked] = useLocalStorage<number>({
		key: "last-button-clicked",
		defaultValue: undefined,
	})

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		// Do nothing if disabled or the control has not been persisted
		if(disable || !control?.id) return

		const route = controlRoute(control)

		if(!route) return

		axios.put(route)

		setLastButtonClicked(control.id)
	}

	return (
		<Button
			color={ control?.color ?? undefined }
			onClick={ handleButtonClick }
			className={ cx([className, "button", {
				[classes.lastButtonClicked]: lastButtonClicked === control.id,
			}]) }
			{ ...props }
		>
			{ control.title }
		</Button>
	)
}

export default ControlButton
