import React from 'react'
import { Control } from '@/Components'
import { ControlProps } from '@/Features/Control'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const DraggableControl = ({ control }: ControlProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<Control
			edit
			control={ control }
			ref={ setNodeRef }
			style={ style }
			{ ...listeners }
			{ ...attributes }
		/>
	)
}

export default DraggableControl
