import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import axios from 'axios'
import { Box, type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'
import EditControlButton from '../EditControlButton'

import cx from 'clsx'
import * as classes from '../Control.css'

interface ButtonControlProps extends ButtonProps, ControlProps {}

const ButtonControl = forwardRef<HTMLButtonElement, ButtonControlProps>((
	{ children, edit, control, ...props },
	ref,
) => {
	const handleButtonClick = () => {
		if(edit || !control?.id) return

		const route = controlRoute(control)

		if(!route) return

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
