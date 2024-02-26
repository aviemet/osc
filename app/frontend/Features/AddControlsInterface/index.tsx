import React from 'react'
import { Paper } from '@mantine/core'
import cx from 'clsx'
import * as classes from './AddControlsInterface.css'
import ButtonControl from './ButtonControl'
import SliderControl from './SliderControl'

const AddControlsInterface = () => {
	return (
		<Paper
			className={ cx(classes.controls) }
			shadow="sm"
			radius="sm"
			p="xs"
		>
			<ButtonControl />
			<br />
			<SliderControl />
		</Paper>
	)
}

export default AddControlsInterface
