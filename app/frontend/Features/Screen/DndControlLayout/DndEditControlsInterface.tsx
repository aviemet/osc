import React from "react"
import {
	DndContext,
	useSensors,
	PointerSensor,
	useSensor,
	closestCenter,
	UniqueIdentifier,
	type DragEndEvent,
	type DragStartEvent,
	DragOverlay,
} from "@dnd-kit/core"
import { arrayMove, SortableContext } from "@dnd-kit/sortable"
import { useDynamicInputs, useForm } from "use-inertia-form"
import { Control } from "@/Features/Controls"
import EditControlWrapper from "./EditControlWrapper"
import { restrictToParentElement } from "@dnd-kit/modifiers"

import * as classes from "./EditControls.css"
import cx from "clsx"

interface DndEditControlsInterfaceProps {
	screen: Schema.ScreensEdit
}

const DndEditControlsInterface = ({ screen }: DndEditControlsInterfaceProps) => {
	const { data, getData, setData, model: formModel } = useForm<{ screen: Schema.ScreensEdit }>()
	const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null)
	// console.log({ data })
	const { paths } = useDynamicInputs({
		model: "controls",
		emptyData: {
			title: "",
			control_type: "",
			order: 0,
			min_value: 0,
			max_value: 0,
			value: "",
			screen_id: screen.id,
			protocol_id: "",
			command_id: "",
			color: "",
			col_span: 1,
			row_span: 1,
		},
	})

	const customHandleEvent = (element: HTMLElement | null) => {
		let cur = element

		while(cur) {
			if(cur.dataset.noDnd) return false
			cur = cur.parentElement
		}

		return true
	}

	PointerSensor.activators = [{
		eventName: "onPointerDown",
		handler: ({ nativeEvent: event }: React.PointerEvent<Element>) => (
			customHandleEvent(event.target as HTMLElement)
		),
	}]

	const sensors = useSensors(
		useSensor(PointerSensor),
	)


	const handleDragStart = (event: DragStartEvent) => {
		setActiveId(event.active.id)
	}

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		setActiveId(null)

		if(!over || active.id === over.id) return

		const controlsPath = `${formModel}.controls`
		const controls = getData(controlsPath) as Schema.ControlsFormData[]

		const activeIndex = controls.findIndex(el => el.id === active.id)
		const overIndex = controls.findIndex(el => el.id === over.id)

		setData(controlsPath, arrayMove(
			getData(controlsPath) as Schema.ControlsFormData[],
			activeIndex,
			overIndex,
		).map((control, i) => {
			control.order = i + 1
			return control
		}))
	}

	const controls = getData(`${formModel}.controls`) as Schema.ControlsEdit[]

	if(!controls || controls.length === 0) return <></>

	return (
		<DndContext
			sensors={ sensors }
			collisionDetection={ closestCenter }
			onDragStart={ handleDragStart }
			onDragEnd={ handleDragEnd }
			modifiers={ [restrictToParentElement] }
		>
			<SortableContext items={ controls }>
				{ paths.map((path, i) => {
					const record = getData(`${formModel}.${path}`) as Schema.ControlsEdit

					return (
						<EditControlWrapper
							key={ record.id }
							index={ i }
							control={ record }
							className={ cx("control-wrapper") }
						>
							{ activeId === record.id ?
								<div className={ cx(classes.controlOverlay) } />
								:
								<Control
									disable
									control={ record }
									wrapper={ false }
								/>
							}
						</EditControlWrapper>
					)
				}) }
			</SortableContext>

			<DragOverlay>
				{ activeId
					? (
						<Control
							disable
							control={ controls.find(c => c.id === activeId) as Schema.ControlsEdit }
							wrapper={ false }
							className={ cx(classes.dragging) }
						/>
					)
					: null }
			</DragOverlay>

		</DndContext>
	)
}

export default DndEditControlsInterface
