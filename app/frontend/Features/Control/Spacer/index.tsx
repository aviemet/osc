import React from 'react'
import { Box } from '@/Components'
import { type ControlProps } from '..'

const SpacerControl = ({ control, edit = false, ...props }: ControlProps) => {
	return (
		<Box { ...props }>{ control.title }</Box>
	)
}

export default SpacerControl
