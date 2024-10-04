import React from 'react'
import { Box } from '@/Components'
import { type ControlProps } from '..'

import cx from 'clsx'
import * as classes from '../Control.css'

const SpacerControl = ({ edit = false, ...props }: ControlProps) => {
	return (
		<Box
			{ ...props }
			className={ cx(classes.spacer, props.className) }
		/>
	)
}

export default SpacerControl
