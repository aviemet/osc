import React from "react"
import EditControlSpacer from "./Edit"
import ControlSpacer from "./Control"
import { type ControlProps } from ".."

export default ({ edit, control, ...props }: ControlProps) => {
	return edit ?
		<EditControlSpacer edit={ true } control={ control } { ...props } />
		:
		<ControlSpacer control={ control } { ...props  } />
}

