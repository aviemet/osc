import React, { useState, useEffect } from "react"
import { Routes } from "@/lib"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Box, type BoxProps } from "@/Components"
import { EditIcon } from "@/Components/Icons"
import { modals } from "@mantine/modals"
import { useForm, UseFormProps } from "use-inertia-form"
import ResizeHandle from "@/Features/Controls/ResizeHandle"
import ControlEditIcon from "./ControlEditIcon"

import cx from "clsx"
import * as classes from "./EditControls.css"

interface EditControlWrapperProps extends BoxProps {
	children: React.ReactNode
	control: Schema.ControlsEdit
}

const EditControlWrapper = ({ children, control, ...props }: EditControlWrapperProps) => {
	const { getData, setData } = useForm<{ screen: Schema.ScreensEdit }>()
	const [resizing, setResizing] = useState(false)
	const [size, setSize] = useState({ width: 1, height: 1 })

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	// const handleResizeStart = (e: React.MouseEvent) => {
	// 	e.stopPropagation()
	// 	setResizing(true)

	// 	const startX = e.clientX
	// 	const startY = e.clientY
	// 	const startWidth = size.width
	// 	const startHeight = size.height

	// 	const handleMouseMove = (e: MouseEvent) => {
	// 		const deltaX = Math.floor((e.clientX - startX) / 150) // 150px is grid cell width
	// 		const deltaY = Math.floor((e.clientY - startY) / 150) // 150px is grid cell height

	// 		setSize({
	// 			width: Math.max(1, startWidth + deltaX),
	// 			height: Math.max(1, startHeight + deltaY),
	// 		})
	// 	}

	// 	const handleMouseUp = () => {
	// 		setResizing(false)
	// 		document.removeEventListener("mousemove", handleMouseMove)
	// 		document.removeEventListener("mouseup", handleMouseUp)

	// 		// Update control in form data
	// 		const controls = getData("screen.controls") as Schema.ControlsFormData[]
	// 		const controlIndex = controls.findIndex(c => c.id === control.id)

	// 		if(controlIndex !== - 1) {
	// 			const updatedControls = [...controls]
	// 			updatedControls[controlIndex] = {
	// 				...control,
	// 				format: {
	// 					...control.format,
	// 					gridWidth: size.width,
	// 					gridHeight: size.height,
	// 				},
	// 			}
	// 			setData("screen.controls", updatedControls)
	// 		}
	// 	}

	// 	document.addEventListener("mousemove", handleMouseMove)
	// 	document.addEventListener("mouseup", handleMouseUp)
	// }

	return (
		<Box
			className={ cx(classes.editControlWrapper, "control", control.control_type) }
			ref={ setNodeRef }
			style={ {
				transform: CSS.Transform.toString(transform),
				transition,
				gridColumn: `span ${size.width}`,
				gridRow: `span ${size.height}`,
				position: "relative",
			} }
			{ ...(resizing ? {} : listeners) }
			{ ...attributes }
			{ ...props }
		>
			<ControlEditIcon control={ control } />
			{ children }
			{ /* <ResizeHandle position="left" onResize={ handleResizeStart } />
			<ResizeHandle position="top" onResize={ handleResizeStart } />
			<ResizeHandle position="right" onResize={ handleResizeStart } />
			<ResizeHandle position="bottom" onResize={ handleResizeStart } />
			<ResizeHandle position="corner" onResize={ handleResizeStart } /> */ }
		</Box>
	)
}

export default EditControlWrapper
