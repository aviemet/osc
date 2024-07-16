import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import axios from 'axios'
import { type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'
import { useLocalStorage } from '@mantine/hooks'

import cx from 'clsx'
import * as classes from '../Control.css'

interface ButtonControlProps extends ButtonProps, ControlProps {}

const ButtonControl = forwardRef<HTMLButtonElement, ButtonControlProps>((
	{ children, edit, control, className, ...props },
	ref,
) => {
	const [lastButtonClicked, setLastButtonClicked] = useLocalStorage<number>({
		key: 'last-button-clicked',
		defaultValue: undefined,
	})
	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		if(edit || !control?.id) return

		const route = controlRoute(control)

		if(!route) return

		axios.put(route)

		setLastButtonClicked(control.id)
	}

	return (
		<Button
			ref={ ref }
			onClick={ handleButtonClick }
			color={ control?.color ?? undefined }
			className={ cx([className, { [classes.lastButtonClicked]: lastButtonClicked === control.id }]) }
			{ ...props }
		>
			{ children || controlTitle(control) }
		</Button>
	)
})

export default ButtonControl
