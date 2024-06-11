import React from 'react'
import { Routes } from '@/lib'
import { Box, type BoxProps } from '@mantine/core'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import ControlForm from './Form'
import { type ControlProps } from '.'

import cx from 'clsx'
import * as classes from './Control.css'

interface EditControlButtonProps extends BoxProps, ControlProps {}

const EditControlButton = ({ control, ...props }: EditControlButtonProps) => {
	return (
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
							to={ Routes.control(control.id!) }
							method="put"
							onSubmit={ () => modals.closeAll() }
							filter={ ['control.id', 'control.command', 'control.updated_at', 'control.created_at', 'control.command_id', 'control.protocol'] }
						/>
					),
				})
			} }
			{ ...props }
		>
			<EditIcon size={ 11 } />
		</Box>
	)
}

export default EditControlButton
