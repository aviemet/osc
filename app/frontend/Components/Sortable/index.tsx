import React, { useState } from 'react'
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	type UniqueIdentifier,
} from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'

interface SortableContainerProps {
	items: (UniqueIdentifier | { id: UniqueIdentifier })[]
	children: React.ReactNode[] | React.ReactNode
}

const SortableContainer = ({
	items,
	children,
	...props
}: SortableContainerProps) => {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)

	const handleDragEnd = (event) => {
		const { active, over } = event

		// if(active.id !== over.id) {
		// 	setItems((items) => {
		// 		const oldIndex = items.indexOf(active.id)
		// 		const newIndex = items.indexOf(over.id)

		// 		return arrayMove(items, oldIndex, newIndex)
		// 	})
		// }
	}

	return (
		<DndContext
			sensors={ sensors }
			collisionDetection={ closestCenter }
			onDragEnd={ handleDragEnd }
		>
			<SortableContext
				items={ items }
				strategy={ verticalListSortingStrategy }
			>
				{ children }
			</SortableContext>
		</DndContext>
	)
}

export default SortableContainer
