import React from 'react'
import Control, { ControlProps } from '@/Pages/Screens/Components/Control'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@mantine/core'
import EditControlButton from './EditControlButton'

import cx from 'clsx'
import * as classes from './Control.css'

interface DraggableControlProps extends ControlProps<{edit: true}> {}

const DraggableControl = ({ control, ...props }: DraggableControlProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	return (
		<Box
			className={ cx(classes.editControlWrapper) }
			ref={ setNodeRef }
			style={ {
				transform: CSS.Transform.toString(transform),
				transition,
			} }
			{ ...listeners }
			{ ...attributes }
		>
			<EditControlButton
				control={ control }
			/>
			<Control
				edit={ true }
				control={ control }
				{ ...props }
			/>
		</Box>

	)
}

export default DraggableControl
