import { Control } from '@/Components'
import { ControlProps } from '@/Features/Control'
import { useDraggable } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import React from 'react'

const DraggableControl = ({ control }: ControlProps) => {
	const draggable = useDraggable({
		id: `draggable_control_${control.id}`,
	})

	const sortable = useSortable({ id: control.id })

	const style = draggable.transform ? {
		transform: `translate3d(${draggable.transform.x}px, ${draggable.transform.y}px, 0)`,
	} : undefined

	return (
		<Control
			edit
			control={ control }
			ref={ sortable.setNodeRef }
			style={ style }
			{ ...sortable.listeners }
			{ ...sortable.attributes }
		/>
	)
}

export default DraggableControl
