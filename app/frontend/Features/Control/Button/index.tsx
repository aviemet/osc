import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import { Routes } from '@/lib'
import axios from 'axios'
import { Box, type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import ControlForm from '../Form'

import cx from 'clsx'
import * as classes from '../Control.css'

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
			{ edit && control?.id && (
				<Box
					className={ cx(classes.editButtonIcon) }
					onClick={ (e) => {
						e.stopPropagation()
						e.preventDefault()
						modals.open({
							title: 'Edit Control',
							children: (
								<ControlForm
									remember={ false }
									control={ control }
									to={ Routes.apiControl(control.id!) }
									method="put"
									onSubmit={ () => modals.closeAll() }
								/>
							),
						})
					} }>
					<EditIcon size={ 11 } />
				</Box>
			) }
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
