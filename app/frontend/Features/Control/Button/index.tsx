import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import axios from 'axios'
import { type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'

interface ButtonControlProps extends ButtonProps, ControlProps {}

const ButtonControl = forwardRef<HTMLButtonElement, ButtonControlProps>((
	{ children, edit, control, ...props },
	ref,
) => {
	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		if(edit || !control?.id) return

		const route = controlRoute(control)

		if(!route) return

		axios.put(route)
	}

	return (
		<Button
			ref={ ref }
			onClick={ handleButtonClick }
			color={ control?.color ?? undefined }
			{ ...props }
		>
			{ children || controlTitle(control) }
		</Button>
	)
})

export default ButtonControl
