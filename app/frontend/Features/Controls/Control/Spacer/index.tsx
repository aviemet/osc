import React from 'react'
import { ControlSpacerBaseProps } from './Base'
import EditControlSpacer from './Edit'
import ControlSpacer from './Control'

interface ControlSpacerProps extends ControlSpacerBaseProps{ }

export default ({ edit, disable, ...props }: ControlSpacerProps) => {
	return edit ?
		<EditControlSpacer { ...props } />
		:
		<ControlSpacer { ...props  } />
}

