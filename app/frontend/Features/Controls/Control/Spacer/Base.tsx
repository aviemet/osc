import React from 'react'
import { Box } from '@/Components'
import { type ControlProps } from '..'

import cx from 'clsx'
import * as classes from '../../Controls.css'

export type ControlSpacerBaseProps = ControlProps & {}

const ControlSpacerBase = ({ className, ...props }: ControlSpacerBaseProps) => {
	return (
		<Box
			{ ...props }
			className={ cx(classes.spacer, className) }
		/>
	)
}

export default ControlSpacerBase
