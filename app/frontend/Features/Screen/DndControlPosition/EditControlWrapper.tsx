import React from "react"
import { Routes } from "@/lib"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Box } from "@mantine/core"
import { EditIcon } from "@/Components/Icons"
import { modals } from "@mantine/modals"
import { useForm, UseFormProps } from "use-inertia-form"

import cx from "clsx"
import * as classes from "./EditControls.css"
import ScreenControlForm, { ScreenControlFormData } from "@/Features/Controls/Form"

interface EditControlWrapperProps {
	children: React.ReactNode
	control: Schema.ControlsFormData
}

const EditControlWrapper = ({ children, control, ...props }: EditControlWrapperProps) => {
	const { getData, setData } = useForm<{ screen: Schema.ScreensEdit }>()
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	const handleEditSuccess = (form: UseFormProps<ScreenControlFormData>) => {
		const updatedControl = form.data.control
		const controls = getData("screen.controls") as Schema.ControlsEdit[]
		const controlIndex = controls.findIndex(c => c.id === updatedControl.id)

		if(controlIndex !== - 1) {
			const updatedControls = [...controls]
			updatedControls[controlIndex] = updatedControl
			setData("screen.controls", updatedControls)
		}

		modals.closeAll()
	}

	const handleEditButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()

		modals.open({
			title: "Edit Control",
			children: (
				<ScreenControlForm
					remember={ false }
					control={ control }
					to={ Routes.control(control.id) }
					method="put"
					onSuccess={ handleEditSuccess }
					filter={ ["control.id", "control.command", "control.updated_at", "control.created_at", "control.command_id", "control.protocol"] }
				/>
			),
		})
	}

	return (
		<Box
			className={ cx(classes.editControlWrapper) }
			ref={ setNodeRef }
			style={ {
				transform: CSS.Transform.toString(transform),
				transition,
			} }
			{ ...listeners }
			{ ...attributes }
		>
			<Box
				className={ cx(classes.editButtonIcon) }
				onMouseUp={ handleEditButtonClick }
				{ ...props }
			>
				<EditIcon size={ 11 } />
			</Box>
			{ children }
		</Box>
	)
}

export default EditControlWrapper
