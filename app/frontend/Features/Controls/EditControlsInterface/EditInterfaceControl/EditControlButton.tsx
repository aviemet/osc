import React from 'react'
import { Routes } from '@/lib'
import { Box } from '@mantine/core'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import ControlForm from '@/Features/Controls/EditControlsInterface/Form'
import { type ControlProps } from '@/Features/Controls/Control'

import cx from 'clsx'
import * as classes from './Control.css'

interface EditControlButtonProps extends Omit<ControlProps, 'control'> {
	control: Schema.ControlsFormData
	onSuccess?: () => void
}

const EditControlButton = ({ control, onSuccess, ...props }: EditControlButtonProps) => {

	const handleEditButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
					onSuccess={ () => {
						onSuccess?.()
					} }
				/>
			),
		})
	}

	return (
		<Box
			className={ cx(classes.editButtonIcon) }
			onMouseUp={ handleEditButtonClick }
			{ ...props }
		>
			<EditIcon size={ 11 } />
		</Box>
	)
}

export default EditControlButton
