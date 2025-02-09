import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Routes } from "@/lib"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Box, type BoxProps } from "@/Components"
import { EditIcon } from "@/Components/Icons"
import { modals } from "@mantine/modals"
import { useForm, UseFormProps } from "use-inertia-form"
import ResizeHandle from "@/Features/Controls/ResizeHandle"
import ControlEditIcon from "./ControlEditIcon"
import { mergeRefs } from "@mantine/hooks"

import cx from "clsx"
import * as classes from "./EditControls.css"
import { controlContainer } from "@/Features/Controls/Controls.css"

interface EditControlWrapperProps extends BoxProps {
	children: React.ReactNode
	control: Schema.ControlsEdit
	index: number
}

const EditControlWrapper = ({ children, index, control, ...props }: EditControlWrapperProps) => {
	// const { getData, setData } = useForm<{ screen: Schema.ScreensEdit }>()
	const [startPos, setStartPos] = useState({ x: 0, y: 0 })

	const containerRef = useRef<HTMLDivElement>(null)
	const [resizing, setResizing] = useState(false)
	const [size, setSize] = useState({ width: 1, height: 1 })

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	const mergedRef = useCallback((element: HTMLDivElement | null) => {
		setNodeRef(element)
		return mergeRefs(containerRef, setNodeRef)
	}, [setNodeRef])

	const maxGridSize = useMemo(() => {
		const container = containerRef.current?.closest(controlContainer)

		if(!container) return { columns: 1, rows: 1 }

		const { width, height } = container.getBoundingClientRect()
		const gridSize = 150 // matches the grid cell size from Controls.css.ts
		const gap = 16 // matches the gap from Controls.css.ts

		return {
			columns: Math.floor((width + gap) / (gridSize + gap)),
			rows: Math.floor((height + gap) / (gridSize + gap)),
		}
	}, [])

	const handleResizeStart = (e: React.MouseEvent, position: "left" | "right" | "top" | "bottom") => {
		e.preventDefault()
		setResizing(true)
		const initialSize = { ...size }
		setStartPos({ x: e.clientX, y: e.clientY })

		const handleMouseMove = (e: MouseEvent) => {
			const deltaX = e.clientX - startPos.x
			const deltaY = e.clientY - startPos.y
			const gridSize = 150 // matches the grid cell size from Controls.css.ts

			const gridDeltaX = Math.floor(deltaX / gridSize)
			const gridDeltaY = Math.floor(deltaY / gridSize)

			if(position === "right") {
				setSize({
					...initialSize,
					width: Math.min(maxGridSize.columns, Math.max(1, initialSize.width + gridDeltaX)),
				})
			} else if(position === "left") {
				setSize({
					...initialSize,
					width: Math.max(1, initialSize.width - gridDeltaX),
				})
			}

			if(position === "bottom") {
				setSize({
					...initialSize,
					height: Math.max(1, initialSize.height + gridDeltaY),
				})
			} else if(position === "top") {
				setSize({
					...initialSize,
					height: Math.max(1, initialSize.height - gridDeltaY),
				})
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
				gridColumn: `span ${size.width}`,
				gridRow: `span ${size.height}`,
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
