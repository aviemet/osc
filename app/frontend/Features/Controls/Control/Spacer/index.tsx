import React from 'react'
import { Box } from '@/Components'
import { type ControlProps } from '..'

import cx from 'clsx'
import * as classes from '../Control.css'

const SpacerControl = ({ className, ...props }: ControlProps) => {
	return (
		<Box
			{ ...props }
			className={ cx(classes.spacer, className) }
		/>
	)
}

export default SpacerControl
