import React from 'react'
import { useDroppable } from '@dnd-kit/core'
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

	return (
		<Box className={ cx(classes.droppable) } ref={ setNodeRef } style={ style }></Box>
	)
}

export default ScreenControlEditInterface
