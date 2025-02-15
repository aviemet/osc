import { useEffect, useState } from "react"
import { Box } from "@/Components"

import cx from "clsx"
import * as classes from "./Controls.css"

const RESIZE_CURSORS = {
	w: classes.ewResize,
	e: classes.ewResize,
	n: classes.nsResize,
	s: classes.nsResize,
	ne: classes.nwseResize,
	se: classes.nwseResize,
	sw: classes.nwseResize,
	nw: classes.nwseResize,
} as const

const removeResizeCursor = () => {
	document.body.classList.remove(RESIZE_CURSORS.w, RESIZE_CURSORS.e, RESIZE_CURSORS.n, RESIZE_CURSORS.s, RESIZE_CURSORS.nw, RESIZE_CURSORS.ne, RESIZE_CURSORS.se, RESIZE_CURSORS.sw)
}

interface ResizeHandleProps {
	position: "left" | "right" | "top" | "bottom" | "corner"
	placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
	onResize: (e: React.MouseEvent) => void
}

const ResizeHandle = ({ position, placement, onResize }: ResizeHandleProps) => {
	const [isDragging, setIsDragging] = useState(false)

	useEffect(() => {
		if(isDragging) {
			const handleGlobalMouseUp = () => {
				setIsDragging(false)
				removeResizeCursor()
			}

			window.addEventListener("mouseup", handleGlobalMouseUp)
			return () => window.removeEventListener("mouseup", handleGlobalMouseUp)
		}
	}, [isDragging])

	let cursorDirection: keyof typeof RESIZE_CURSORS
	switch(position) {
		case "left":
			cursorDirection = "w"
			break
		case "right":
			cursorDirection = "e"
			break
		case "top":
			cursorDirection = "n"
			break
		case "bottom":
			cursorDirection = "s"
			break
		case "corner":
			switch(placement) {
				case "top-left":
					cursorDirection = "nw"
					break
				case "top-right":
					cursorDirection = "ne"
					break
				case "bottom-left":
					cursorDirection = "sw"
					break
				case "bottom-right":
					cursorDirection = "se"
					break
			}
			break
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
		document.body.classList.add(RESIZE_CURSORS[cursorDirection])
		onResize(e)
	}

	return (
		<Box
			className={ cx(classes.handleStyles, position, placement) }
			onMouseDown={ handleMouseDown }
			data-no-dnd
		/>
	)
}

export default ResizeHandle
