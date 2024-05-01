import { Control } from '@/Components'
import { ControlProps } from '@/Features/Control'
import { useDraggable } from '@dnd-kit/core'
import React from 'react'

const DraggableControl = ({ control }: ControlProps) => {
	const draggable = useDraggable({
		id: `draggable_control_${control.id}`,
	})

	const style = draggable.transform ? {
		transform: `translate3d(${draggable.transform.x}px, ${draggable.transform.y}px, 0)`,
	} : undefined

	return (
		<Control
			edit
			control={ control }
			ref={ draggable.setNodeRef }
			style={ style }
			{ ...draggable.listeners }
			{ ...draggable.attributes }
		/>
	)
}

export default DraggableControl
