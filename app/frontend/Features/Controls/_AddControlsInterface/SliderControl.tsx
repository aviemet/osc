import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { Slider, Text } from '@mantine/core'

const SliderControl = () => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: 'slider',
	})

	const style = transform
		? {
			transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		}
		: undefined

	return (
		<>
			<div ref={ setNodeRef } style={ style }>
				<Slider
					label={ null }
					value={ 50 }
					{ ...listeners }
					{ ...attributes }
				>
					Slider
				</Slider>
			</div>
			<Text>Slider</Text>
		</>
	)
}

export default SliderControl
