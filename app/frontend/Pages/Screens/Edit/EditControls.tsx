import React, { useCallback, useMemo } from 'react'
import { Button, Control, Menu, Modal, Page, Tabs } from '@/Components'
import { CrossIcon } from '@/Components/Icons'
import { Routes } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'
import { useDisclosure } from '@mantine/hooks'
import { Affix, Box } from '@mantine/core'
import {
	DndContext,
	DragOverlay,
	type DragMoveEvent,
	type DragEndEvent,
	type DragStartEvent,
	useDroppable,
	useSensors,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	closestCenter,
} from '@dnd-kit/core'
import {
	arrayMove,
	rectSwappingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { AddControlsInterface } from '@/Features'
import ControlForm from '@/Pages/Controls/Form'
import ScreenForm from '../Form'
import NewScreenModal from './NewScreenModal'
import DraggableControl from './DraggableControl'
import SortableDynamicInputs from '@/Components/Form/DynamicInputs/SortableDynamicInputs'

import cx from 'clsx'
import * as classes from './ScreenControl.css'
import { useDynamicInputs, useForm } from 'use-inertia-form'

interface IEditControlsProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditControls = ({ screen }: IEditControlsProps) => {
	const { addInput, removeInput, paths } = useDynamicInputs<T>({
		model: 'controls',
		emptyData: {
			title: '',
			control_type: '',
			order: 0,
			min_value: 0,
			max_value: 0,
			value: '',
			screen_id: screen.id,
			protocol_id: '',
			command_id: '',
		},
	})
	const { data, getData, setData, model } = useForm()

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)

	const handleDragEnd = (event: DragEndEvent) => {
		// newControlModalOpen()
		console.log({ dragEnd: event })
		// router.post(Routes.controls(), {
		// 	control: {
		// 		type: event.active.id,
		// 	},
		// })
	}

	const sortedControls = useMemo(() => {
		return paths.sort((pathA, pathB) => {
			const datumA = getData(`${model}.${pathA}`) as OrderedObject
			const datumB = getData(`${model}.${pathB}`) as OrderedObject

			return datumA.order > datumB.order ? 1 : -1
		})
	}, [paths])

	return (
		<DndContext
			sensors={ sensors }
			collisionDetection={ closestCenter }
			onDragEnd={ handleDragEnd }
		>
			<SortableDynamicInputs
				model="controls"
				emptyData={ {
					// @ts-ignore
					command_id: '',
					command_value_id: '',
					value: '',
					delay: '',
					order: '',
					key: '',
				} }>
				{ screen?.controls?.map(control => <DraggableControl key={ control.id } control={ control } />) }
			</SortableDynamicInputs>
		</DndContext>
	)
}

export default EditControls
