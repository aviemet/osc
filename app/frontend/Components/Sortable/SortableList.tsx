import React, { useMemo, useState } from "react"
import type { ReactNode } from "react"
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core"
import type { Active, DragEndEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core"
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
} from "@dnd-kit/sortable"

import * as classes from "./SortableList.css"
import { SortableOverlay } from "./SortableOverlay"
import { DragHandle, SortableItem } from "./SortableItem"

interface BaseItem {
	id: UniqueIdentifier
}

interface Props<T extends BaseItem> {
	items: T[]
	children(item: T): ReactNode
}

const SortableList = <T extends BaseItem>({
	items,
	children,
}: Props<T>) => {
	const [localItems, setLocalItems] = useState(items)
	const [active, setActive] = useState<Active | null>(null)

	const activeItem = useMemo(
		() => localItems.find((item) => item.id === active?.id),
		[active, localItems],
	)

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)

	const handleDragStart = ({ active }: DragStartEvent) => {
		setActive(active)
	}

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if(over && active.id !== over?.id) {
			const activeIndex = localItems.findIndex(({ id }) => id === active.id)
			const overIndex = localItems.findIndex(({ id }) => id === over.id)

			setLocalItems(arrayMove(localItems, activeIndex, overIndex))
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

			<SortableContext items={ localItems }>
				<div className={ classes.sortableList } role="application">
					{ localItems.map((item) => (
						<React.Fragment key={ item.id }>{ children(item) }</React.Fragment>
					)) }
				</div>
			</SortableContext>

			<SortableOverlay>
				{ activeItem ? children(activeItem) : null }
			</SortableOverlay>

		</DndContext>
	)
}

SortableList.Item = SortableItem
SortableList.DragHandle = DragHandle

export default SortableList
