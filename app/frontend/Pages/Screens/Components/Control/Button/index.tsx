import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import axios from 'axios'
import { Box, type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'

import cx from 'clsx'
import * as classes from '../Control.css'
import EditControlButton from './EditControlButton'

interface ButtonControlProps extends ButtonProps, ControlProps {}

const ButtonControl = forwardRef<HTMLButtonElement, ButtonControlProps>((
	{ children, edit, control, ...props },
	ref,
) => {
	const handleButtonClick = () => {
		const route = controlRoute(control)

		if(edit || route === false) return

		axios.put(route)
	}

	return (
		<Box className={ cx(classes.editControlWrapper) }>
			{ edit && control?.id && <EditControlButton control={ control } /> }
			<Button
				ref={ ref }
				onClick={ handleButtonClick }
				color={ control?.color ?? undefined }
				{ ...props }
			>
				{ children || controlTitle(control) }
			</Button>
		</Box>
	)
})

export default ButtonControl
