import React from 'react'
import axios from 'axios'
import { useLocalStorage } from '@/lib/hooks'
import { controlRoute } from '../lib'
import Base, { type ControlButtonBaseProps } from './Base'

import cx from 'clsx'
import * as classes from '../../Controls.css'

export interface ControlButtonProps extends ControlButtonBaseProps {}

const ControlButton = ({
	children,
	control,
	disable,
	className,
	...props
}: ControlButtonProps) => {
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
			control={ control }
			{ ...props }
		>
			{ children }
		</Base>
	)
}

export default ControlButton
