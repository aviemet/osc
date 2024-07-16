import React from 'react'
import { Box } from '@/Components'
import { type ControlProps } from '..'

const SpacerControl = ({ edit = false, ...props }: ControlProps) => {
	return (
		<Box { ...props }></Box>
	)
}

export default SpacerControl
