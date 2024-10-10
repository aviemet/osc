import React from 'react'
import { ControlButtonBaseProps } from './Base'
import EditControlButton from './Edit'
import ControlButton from './Control'

interface ControlButtonProps extends ControlButtonBaseProps{ }

export default ({ edit, ...props }: ControlButtonProps) => {
	return edit ?
		<EditControlButton { ...props } />
		:
		<ControlButton { ...props  } />
}

