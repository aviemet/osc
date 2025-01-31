import React from "react"
import Base from "./Base"
import { type ControlProps } from ".."

type EditControlSpacerProps = ControlProps & {
	edit: true
	control: Schema.ControlsFormData
}

const EditControlSpacer = ({ ...props }: EditControlSpacerProps) => {
	return <Base { ...props } />
}

export default EditControlSpacer
