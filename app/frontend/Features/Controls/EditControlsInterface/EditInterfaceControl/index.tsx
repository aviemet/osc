import React from 'react'
import { Control, ControlProps } from '@/Features/Controls'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@mantine/core'
import EditControlButton from './EditControlButton'

import cx from 'clsx'
import * as classes from './Control.css'
import { router } from '@inertiajs/react'

interface DraggableControlProps extends ControlProps<Schema.ControlsFormData> {}

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
				onSuccess={ () => router.reload() }
			/>
			<Control<Schema.ControlsFormData>
				disable={ true }
				wrapper={ false }
				control={ control }
				{ ...props }
			/>
		</Box>
	)
}

export default DraggableControl
