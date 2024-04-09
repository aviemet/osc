import React from 'react'
import { Box } from '@/Components'
import { type CommonControlProps } from '..'

const SpacerControl = ({ edit = false, ...props }: CommonControlProps) => {
	return (
		<Box { ...props }></Box>
	)
}

export default SpacerControl
