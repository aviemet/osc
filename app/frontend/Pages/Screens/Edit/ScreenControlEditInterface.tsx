import React from 'react'
import { DragOverlay, useDroppable } from '@dnd-kit/core'
import {
	restrictToVerticalAxis,
	restrictToWindowEdges,
	createSnapModifier,
} from '@dnd-kit/modifiers'
import { Box, EditControl } from '@/Components'
import cx from 'clsx'
import * as classes from './ScreenControl.css'

interface ScreenControlEditInterfaceProps {
	screen: Schema.ScreensEdit
}

const ScreenControlEditInterface = ({ screen }: ScreenControlEditInterfaceProps) => {
	return (
		<Box>
			{ screen?.controls?.map(control => <EditControl key={ control.id } control={ control } />) }
		</Box>
	)
}

export default ScreenControlEditInterface
