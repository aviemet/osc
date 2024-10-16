import React from 'react'
import { type ControlButtonBaseProps } from './Base'
import EditControlButton from './Edit'
import ControlButton from './Control'

export default ({ edit, control, ...props }: ControlButtonBaseProps) => {
	return edit ?
		<EditControlButton edit={ true } control={ control } { ...props } />
		:
		<ControlButton control={ control } { ...props  } />
}

