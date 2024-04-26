import React, { createContext, useMemo } from 'react'
import type { CSSProperties, PropsWithChildren } from 'react'
import type {
	DraggableSyntheticListeners,
	UniqueIdentifier,
} from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import * as classes from './SortableItem.css'

interface Props {
	id: UniqueIdentifier
}

interface Context {
	attributes: Record<string, any>
	listeners: DraggableSyntheticListeners
	ref(node: HTMLElement | null): void
}

export const SortableItemContext = createContext<Context>({
	attributes: {},
	listeners: undefined,
	ref() {},
})

export function SortableItem({ children, id }: PropsWithChildren<Props>) {
	const {
		attributes,
		isDragging,
		listeners,
		setNodeRef,
		setActivatorNodeRef,
		transform,
		transition,
	} = useSortable({ id })

	console.log({ attributes, isDragging, listeners, transform, transition })

	const context = useMemo(
		() => ({
			attributes,
			listeners,
			ref: setActivatorNodeRef,
		}),
		[attributes, listeners, setActivatorNodeRef],
	)

	const style: CSSProperties = {
		opacity: isDragging ? 0.4 : undefined,
		transform: CSS.Translate.toString(transform),
		transition,
	}

	return (
		<SortableItemContext.Provider value={ context }>
			<li className={ classes.sortableItem } ref={ setNodeRef } style={ style }>
				{ children }
			</li>
		</SortableItemContext.Provider>
	)
}

export { DragHandle } from './DragHandle'
