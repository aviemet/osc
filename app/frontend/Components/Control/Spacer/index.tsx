import React from 'react'
import { Box } from '@/Components'

interface SpacerControlProps {
	control: Schema.ControlsShow
}

const SpacerControl = ({ control }: SpacerControlProps) => {
	return (
		<Box>{ control.title }</Box>
	)
}

export default SpacerControl
