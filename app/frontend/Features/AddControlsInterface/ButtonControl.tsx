import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { Button, ButtonProps } from '@mantine/core'

interface ButtonControlProps extends ButtonProps {

}

const ButtonControl = ({ ...props }: ButtonControlProps) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: 'button',
	})

	const style = transform ? {
		transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
	} : undefined

	return (
		<div ref={ setNodeRef } style={ style }>
			<Button { ...listeners } { ...attributes } { ...props }>Button</Button>
		</div>
	)
}

export default ButtonControl
