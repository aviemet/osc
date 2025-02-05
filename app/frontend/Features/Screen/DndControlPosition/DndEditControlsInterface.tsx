import {
	DndContext,
	useSensors,
	PointerSensor,
	useSensor,
	closestCenter,
	UniqueIdentifier,
	type DragEndEvent,
} from "@dnd-kit/core"
import { arrayMove, SortableContext } from "@dnd-kit/sortable"
import { useDynamicInputs, useForm } from "use-inertia-form"
import { Control } from "@/Features/Controls"
import EditControlWrapper from "./EditControlWrapper"

import cx from "clsx"

interface DndEditControlsInterfaceProps {
	screen: Schema.ScreensEdit
}

const DndEditControlsInterface = ({ screen }: DndEditControlsInterfaceProps) => {
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
		},
	})

	const { getData, setData, model: formModel } = useForm<{ screen: Schema.ScreensEdit }>()

	const sensors = useSensors(
		useSensor(PointerSensor),
	)

	const controlsPath = `${formModel}.controls`

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if(!over || active.id === over.id) return

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

	return (
		<DndContext
			sensors={ sensors }
			collisionDetection={ closestCenter }
			onDragEnd={ handleDragEnd }
		>
			<SortableContext
				items={ getData(`${formModel}.controls`) as UniqueIdentifier[] }
			>
				{ paths.map((path, i) => {
					const record = getData(`${formModel}.${path}`) as Schema.ControlsFormData

					return (
						<EditControlWrapper
							key={ record.id }
							control={ record }
							className={ cx("control-wrapper") }
						>
							<Control
								disable
								control={ record }
								wrapper={ false }
							/>
						</EditControlWrapper>
					)
				}) }
			</SortableContext>
		</DndContext>
	)
}

export default DndEditControlsInterface
