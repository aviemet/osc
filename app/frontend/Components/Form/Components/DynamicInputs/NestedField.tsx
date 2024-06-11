import React, { useMemo, useState } from 'react'
import { Box, Button, Flex, Group, Label, Paper } from '@/Components'
import { PlusCircleIcon, MinusCircleIcon, DraggableIcon } from '@/Components/Icons'
import { NestedFields, NestedObject, useDynamicInputs, useForm } from 'use-inertia-form'
import cx from 'clsx'
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
	Active,
	DragEndEvent,
	DragStartEvent,
	UniqueIdentifier,
} from '@dnd-kit/core'
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { createContext } from '@/lib/hooks'
import { FormPointerSensor, FormTouchSensor } from '@/Components/Sortable'
import { type DynamicInputsProps } from '.'

import * as classes from '../../Form.css'
import { useDynamicInputContext } from './dynamicInputContext'

interface NestedFieldProps<T = NestedObject> {
	children: React.ReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
	model: string
	onRemoveInput?: (record: T) => void
}

const NestedField = <T extends Record<string, any>>({
	children,
	model,
	onRemoveInput,
}: NestedFieldProps<T>) => {
	const { record, path, addInput, removeInput, index } = useDynamicInputContext<Record<string, any>>()

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: record.order })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const handleRemoveInput = (i: number) => {
		const record = removeInput(i)
		onRemoveInput?.(record as T)
	}

	return (
		<Box ref={ setNodeRef } style={ style }  { ...attributes }>
			<NestedFields model={ model }>
				<Flex align="center">
					<Group component={ Paper } className={ cx(classes.dynamicInput) } style={ { flex: 1 } }>
						<Paper shadow="xs" py="xs" px="md" radius="md" className={ cx('draggable') } { ...listeners }>
							<DraggableIcon />
						</Paper>
						<Box style={ { flex: 1 } }>
							{ children }
						</Box>
					</Group>
					<Button onClick={ () => handleRemoveInput(index) } size='xs' ml="xs">
						<MinusCircleIcon />
					</Button>
				</Flex>
			</NestedFields>
		</Box>
	)
}

export default NestedField
