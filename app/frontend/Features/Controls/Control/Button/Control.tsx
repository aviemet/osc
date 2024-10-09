
import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import axios from 'axios'
import { type ButtonProps } from '@mantine/core'
import { useLocalStorage } from '@/lib/hooks'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'
import Base from './Base'

import cx from 'clsx'
import * as classes from '../Control.css'

export interface ButtonControlProps extends ButtonProps, ControlProps {}

const ButtonControl = forwardRef<HTMLButtonElement, ButtonControlProps>((
	{ children, control, disable, className, ...props },
	ref,
) => {
	const [lastButtonClicked, setLastButtonClicked] = useLocalStorage<number>({
		key: 'last-button-clicked',
		defaultValue: undefined,
	})

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		if(disable || !control?.id) return

		const route = controlRoute(control)

		if(!route) return

		axios.put(route)

		setLastButtonClicked(control.id)
	}

	return (
		<Base
			onClick={ handleButtonClick }
			className={ cx([className, {
				[classes.lastButtonClicked]: lastButtonClicked === control.id,
			}]) }
			{ ...props }
		>
			{ children || controlTitle(control) }
		</Base>
	)
})

export default ButtonControl
