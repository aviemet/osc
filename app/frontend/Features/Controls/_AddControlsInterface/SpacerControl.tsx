import React from "react"
import { useDraggable } from "@dnd-kit/core"
import { Box, Slider, Text } from "@mantine/core"

const SpacerControl = () => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "spacer",
	})

	const style = transform
		? {
			transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		}
		: undefined

	return (
		<>
			<div ref={ setNodeRef } style={ style }>
				<Box
					{ ...listeners }
					{ ...attributes }
				>
					Spacer
				</Box>
			</div>
		</>
	)
}

export default SpacerControl
