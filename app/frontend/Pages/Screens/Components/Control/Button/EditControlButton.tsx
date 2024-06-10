import React from 'react'
import { Routes } from '@/lib'
import { Box, type BoxProps } from '@mantine/core'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import ControlForm from '../Form'
import { type ControlProps } from '..'

import cx from 'clsx'
import * as classes from '../Control.css'

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
							to={ Routes.apiControl(control.id!) }
							method="put"
							onSubmit={ () => modals.closeAll() }
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
