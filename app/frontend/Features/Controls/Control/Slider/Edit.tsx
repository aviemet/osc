import React from "react"
import Base, { type ControlSliderBaseProps } from "./Base"

type EditControlSliderProps = ControlSliderBaseProps & {
	edit: true
	control: Schema.ControlsFormData
}

const EditControlSlider = ({ ...props }: EditControlSliderProps) => {
	return <Base { ...props } />
}

export default EditControlSlider
