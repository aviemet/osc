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
	screen: Schema.ScreensShow
}

const ScreenControlEditInterface = ({ screen }: ScreenControlEditInterfaceProps) => {
	const { isOver, setNodeRef } = useDroppable({
		id: screen.slug,
	})

	const style = {
		backgroundColor: isOver ? 'green' : undefined,
	}

	const gridSize = 10

	const snapToGridModifier = createSnapModifier(gridSize)

	return (
		<Box
			className={ cx(classes.droppable) }
			ref={ setNodeRef }
			style={ style }
		>
			<DragOverlay
				modifiers={ [snapToGridModifier, restrictToWindowEdges] }
				className={ cx(classes.dragOverlay) }
			>
			</DragOverlay>
		</Box>
	)
}

export default ScreenControlEditInterface
