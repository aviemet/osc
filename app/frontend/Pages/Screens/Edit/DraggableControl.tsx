import React from 'react'
import { Control } from '@/Features'
import { ControlProps } from '@/Pages/Screens/Components/Control'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface DraggableControlProps extends Omit<ControlProps, 'control'|'edit'> {
	control: Schema.ControlsFormData
}

const DraggableControl = ({ control, ...props }: DraggableControlProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	return (
		<Control
			control={ control }
			ref={ setNodeRef }
			style={ {
				transform: CSS.Transform.toString(transform),
				transition,
			} }

			{ ...listeners }
			{ ...attributes }
			{ ...props }
		/>
	)
}

export default DraggableControl
