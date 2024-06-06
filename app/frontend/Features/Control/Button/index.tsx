import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import { Routes } from '@/lib'
import axios from 'axios'
import { type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import ControlForm from '../Form'

import * as classes from '../Control.css'

interface ButtonControlProps extends ButtonProps, ControlProps {}

const ButtonControl = forwardRef<HTMLButtonElement, ButtonControlProps>((
	{ edit, control, ...props },
	ref,
) => {
	const handleButtonClick = () => {
		const route = controlRoute(control)

		if(edit || route === false) return

		axios.put(route)
	}

	return (
		<Button
			ref={ ref }
			onClick={ handleButtonClick }
			{ ...props }
		>
			{ edit && control?.id && <EditIcon
				size={ 11 }
				className={ classes.editButtonIcon }
				onClick={ () => {
					modals.open({
						title: 'Edit Control',
						children: (
							<ControlForm
								remember={ false }
								control={ control }
								to={ Routes.apiControl(control.id!) }
								onSubmit={ () => modals.closeAll() }
							/>
						),
					})
				} }
			/> }
			{ controlTitle(control) }
		</Button>
	)
})

export default ButtonControl
