import React, { useState, useRef, useCallback, useMemo } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Box, type BoxProps } from "@/Components"
import { useForm } from "use-inertia-form"
import ResizeHandle from "@/Features/Controls/ResizeHandle"
import ControlEditIcon from "./ControlEditIcon"

import cx from "clsx"
import * as classes from "./EditControls.css"

interface EditControlWrapperProps extends BoxProps {
	children: React.ReactNode
	control: Schema.ControlsEdit
	index: number
}

const EditControlWrapper = ({ children, index, control, ...props }: EditControlWrapperProps) => {
	const { getData, setData } = useForm<{ screen: Schema.ScreensEdit }>()
	const formPath = `screen.controls.[${index}]`

	const containerRef = useRef<HTMLDivElement>(null)
	const [resizing, setResizing] = useState(false)

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	const mergedRef = useCallback((element: HTMLDivElement | null) => {
		if(element) {
			containerRef.current = element
			setNodeRef(element)
		}
	}, [setNodeRef])

	const gridWidth = useMemo(() => {
		const container = document.querySelector(".mantine-Container-root")
		if(!container) return 0
		const columns = getData("screen.columns")
		return (container.clientWidth - ((columns - 1) * 16)) / columns
	}, [getData])

	const handleResizeStart = (e: React.MouseEvent, position: "right" | "bottom") => {
		e.preventDefault()

		if(!containerRef.current) return

		const gridHeight = Math.floor(containerRef.current.getBoundingClientRect().height)

		setResizing(true)
		const startPos = { x: e.clientX, y: e.clientY }

		const handleMouseMove = (e: MouseEvent) => {
			const startColSpan = control.col_span ?? 1
			const startRowSpan = control.row_span ?? 1

			const deltaX = e.clientX - startPos.x
			const deltaY = e.clientY - startPos.y

			const gridDeltaX = Math.floor(deltaX / gridWidth)
			const gridDeltaY = Math.floor(deltaY / gridHeight)

			if(position === "right") {
				setData(`${formPath}.col_span`, Math.min(
					getData("screen.columns"),
					Math.max(1, startColSpan + gridDeltaX))
				)
			}

			if(position === "bottom") {
				setData(`${formPath}.row_span`, Math.max(1, startRowSpan + gridDeltaY))
			}
		}

		const handleMouseUp = () => {
			setResizing(false)
			document.removeEventListener("mousemove", handleMouseMove)
			document.removeEventListener("mouseup", handleMouseUp)
		}

		document.addEventListener("mousemove", handleMouseMove)
		document.addEventListener("mouseup", handleMouseUp)
	}

	return (
		<Box
			ref={ mergedRef }
			className={ cx(classes.editControlWrapper, "control", control.control_type) }
			style={ {
				transform: CSS.Transform.toString(transform),
				transition,
				gridColumn: `span ${control.col_span}`,
				gridRow: `span ${control.row_span}`,
				position: "relative",
			} }
			{ ...(resizing ? {} : listeners) }
			{ ...attributes }
			{ ...props }
		>
			<ControlEditIcon control={ control } index={ index } />
			{ children }

			<ResizeHandle position="right" onResize={ (e) => handleResizeStart(e, "right") } />
			<ResizeHandle position="bottom" onResize={ (e) => handleResizeStart(e, "bottom") } />

			{ /* Corner handle */ }
			<ResizeHandle position="corner" placement="bottom-right" onResize={ (e) => {
				handleResizeStart(e, "right")
				handleResizeStart(e, "bottom")
			} } />
		</Box>
	)
}

export default EditControlWrapper
