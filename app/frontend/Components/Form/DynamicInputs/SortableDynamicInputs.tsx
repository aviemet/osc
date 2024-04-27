import React, { useCallback, useMemo, useState } from 'react'
import { Box, Button, Flex, Label, Paper } from '@/Components'
import { PlusCircleIcon, MinusCircleIcon } from '@/Components/Icons'
import { NestedFields, NestedObject, useDynamicInputs, useForm } from 'use-inertia-form'
import { DynamicInputContextProvider } from './dynamicInputContext'
import cx from 'clsx'
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
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { createContext } from '@/lib/hooks'
import { FormPointerSensor, FormTouchSensor } from '@/Components/Sortable'
import { type DynamicInputsProps } from '.'

import * as classes from '../Form.css'
import NestedField from './NestedField'

const [useSortableFormContext, SortableFormContextProvider] = createContext()
export { useSortableFormContext }

interface BaseItem extends NestedObject {
	id: UniqueIdentifier
}

interface SortableDynamicInputsProps<T = BaseItem> extends DynamicInputsProps<T> {
	model: string
	sortField?: string
}

const SortableDynamicInputs = <T extends BaseItem>({
	children,
	model,
	label,
	emptyData,
	onAddInput,
	onRemoveInput,
	sortField = 'order',
}: SortableDynamicInputsProps) => {
	/* Dynamic form stuff */
	const { addInput, removeInput, paths } = useDynamicInputs<T>({ model, emptyData })
	const { data, getData, setData, model: formModel } = useForm()

	const fieldsPath = `${formModel}.${model}`

	const handleRemoveInput = (i: number) => {
		const record = removeInput(i)
		onRemoveInput?.(record as T)
	}

	const handleAddInput = () => {
		const length = (getData(fieldsPath) as T[]).length
		onAddInput?.()
		addInput({
			order: length,
		})
	}

	/* DnD stuff */
	const [active, setActive] = useState<Active | null>(null)

	const items = useMemo(
		() => getData(fieldsPath) as T[],
		[data],
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
			const activeIndex = items.findIndex(({ order }) => order === active.id)
			const overIndex = items.findIndex(({ order }) => order === over.id)

			arrayMove(items, activeIndex, overIndex).forEach((item, i) => {
				setData(`${fieldsPath}[${i}].order`, item.order)
			})
		}
		setActive(null)
	}

	const handleDragCancel = () => {
		setActive(null)
	}

	const sortedPaths = useMemo(() => {
		return paths.sort((pathA, pathB) => {
			const datumA = getData(`${formModel}.${pathA}`)
			const datumB = getData(`${formModel}.${pathB}`)

			return datumA.order > datumB.order ? 1 : -1
		})
	}, [data])

	return (
		<Box className={ cx('dynamic_inputs', model, paths) }>
			<Label style={ { flex: 1 } }>{ label }</Label>

			<DndContext
				sensors={ sensors }
				onDragStart={ handleDragStart }
				onDragEnd={ handleDragEnd }
				onDragCancel={ handleDragCancel }
			>
				<SortableContext items={ useCallback(() => items?.map(item => item.order ), [items])() } strategy={ verticalListSortingStrategy }>

					{ sortedPaths.map((path, i) => (
						<DynamicInputContextProvider key={ i }  value={ {
							record: getData(`${formModel}.${path}`),
							path,
							addInput,
							removeInput,
							index: i,
						} }>
							<NestedField model={ path } onRemoveInput={ onRemoveInput }>
								{ children }
							</NestedField>
						</DynamicInputContextProvider>
					)) }

					<Box style={ { textAlign: 'right' } }>
						<Button onClick={ handleAddInput } size='xs' mb="xs" mr="xs">
							<PlusCircleIcon />
						</Button>
					</Box>

				</SortableContext>

			</DndContext>
		</Box>
	)
}

export default SortableDynamicInputs
