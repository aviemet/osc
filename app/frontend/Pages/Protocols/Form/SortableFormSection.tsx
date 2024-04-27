import React, { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import type { Active, DragEndEvent, DragStartEvent, UniqueIdentifier } from '@dnd-kit/core'
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'

// import * as classes from './SortableList.css'
import { useForm } from 'use-inertia-form'
import { createContext } from '@/lib/hooks'
import { FormPointerSensor, FormTouchSensor } from '@/Components/Sortable'

const [useSortableFormContext, SortableFormContextProvider] = createContext()
export { useSortableFormContext }

interface BaseItem {
	id: UniqueIdentifier
}

interface SortableFormSectionProps {
	children: any
	model: string
	sortField?: string
}

const SortableFormSection = <T extends BaseItem>({
	children,
	model,
	sortField = 'order',
}: SortableFormSectionProps) => {
	const form = useForm()
	const [active, setActive] = useState<Active | null>(null)

	const items = useMemo(
		() => form.getData(`${form.model}.${model}`) as T[],
		[form.data],
	)

	// const activeItem = useMemo(
	// 	() => items.find((item) => item.id === active?.id),
	// 	[active, form.data],
	// )

	const sensors = useSensors(
		useSensor(FormPointerSensor),
		// useSensor(FormTouchSensor),
	)

	const handleDragStart = ({ active }: DragStartEvent) => {
		setActive(active)
	}

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if(over && active.id !== over?.id) {
			const activeIndex = items.findIndex(({ id }) => id === active.id)
			const overIndex = items.findIndex(({ id }) => id === over.id)

			form.setData(arrayMove(items, activeIndex, overIndex))
		}
		setActive(null)
	}

	const handleDragCancel = () => {
		setActive(null)
	}

	return (
		<DndContext
			sensors={ sensors }
			onDragStart={ handleDragStart }
			onDragEnd={ handleDragEnd }
			onDragCancel={ handleDragCancel }
		>
			<SortableContext items={ items } strategy={ verticalListSortingStrategy }>

				<SortableFormContextProvider value={ { active } }>
					{ children }
				</SortableFormContextProvider>

			</SortableContext>
		</DndContext>
	)
}

export default SortableFormSection
