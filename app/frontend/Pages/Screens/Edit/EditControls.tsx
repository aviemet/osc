import React, { useMemo } from 'react'
import {
	DndContext,
	type DragEndEvent,
	useSensors,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	closestCenter,
} from '@dnd-kit/core'
import {
	sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import DraggableControl from './DraggableControl'
import SortableDynamicInputs from '@/Components/Form/Components/DynamicInputs/SortableDynamicInputs'
import { useDynamicInputs, useForm } from 'use-inertia-form'

interface IEditControlsProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditControls = ({ screen }: IEditControlsProps) => {
	const { paths } = useDynamicInputs({
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
	const { getData, model } = useForm()

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)

	const handleDragEnd = (event: DragEndEvent) => {
		// newControlModalOpen()

		// router.post(Routes.controls(), {
		// 	control: {
		// 		type: event.active.id,
		// 	},
		// })
	}

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
					command_id: NaN,
					command_value_id: NaN,
					value: '',
					delay: '',
					order: NaN,
					key: NaN,
				} }>
				{ screen?.controls?.map(control => <DraggableControl key={ control.id } control={ control } />) }
			</SortableDynamicInputs>
		</DndContext>
	)
}

export default EditControls
