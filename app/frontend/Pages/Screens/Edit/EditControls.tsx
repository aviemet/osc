import React from 'react'
import {
	DndContext,
	type DragEndEvent,
	useSensors,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	closestCenter,
	UniqueIdentifier,
} from '@dnd-kit/core'
import {
	SortableContext,
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
	const { getData, model, data } = useForm()
	console.log({ controls: data.screen.controls })
	const sensors = useSensors(
		useSensor(PointerSensor),
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
			<SortableContext
				items={ getData(`${model}.controls`) as UniqueIdentifier[] }
			>
				{ screen?.controls?.map(control => {
					return <DraggableControl key={ control.id } control={ control } />
				}) }
			</SortableContext>
		</DndContext>
	)
}

export default EditControls
