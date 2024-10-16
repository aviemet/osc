import React from 'react'
import EditControlSlider from './Edit'
import ControlSlider from './Control'
import { type ControlProps } from '..'

export default ({ edit, control, ...props }: ControlProps) => {
	return edit ?
		<EditControlSlider edit={ true } control={ control } { ...props } />
		:
		<ControlSlider control={ control } { ...props  } />
}

