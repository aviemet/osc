import React from 'react'
import { DragOverlay, useDroppable } from '@dnd-kit/core'
import {
	restrictToVerticalAxis,
	restrictToWindowEdges,
	createSnapModifier,
} from '@dnd-kit/modifiers'
import { Box } from '@mantine/core'
import cx from 'clsx'
import * as classes from './ScreenControl.css'

interface ScreenControlEditInterfaceProps {
	screen: Schema.ScreensEdit
}

const ScreenControlEditInterface = ({ screen }: ScreenControlEditInterfaceProps) => {
	console.log({ controls: screen.controls })
	return (
		<Box>
			{ screen?.controls.map(control => (
				<></>
			)) }
		</Box>
	)
}

export default ScreenControlEditInterface
