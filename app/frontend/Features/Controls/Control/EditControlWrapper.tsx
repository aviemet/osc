import React from 'react'
import { Routes } from '@/lib'
import { router } from '@inertiajs/react'
import { Control, type ControlProps } from '@/Features/Controls'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box, BoxProps } from '@mantine/core'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import EditControlForm from '../EditControlForm'

import cx from 'clsx'
import * as classes from '../Controls.css'

interface EditControlWrapperProps extends ControlProps {}

const EditControlWrapper = ({ children, control, ...props }: EditControlWrapperProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: control.id! })

	const handleEditButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()

		modals.open({
			title: 'Edit Control',
			children: (
				<EditControlForm
					remember={ false }
					control={ control }
					to={ Routes.control(control.id!) }
					method="put"
					onSubmit={ () => modals.closeAll() }
					filter={ ['control.id', 'control.command', 'control.updated_at', 'control.created_at', 'control.command_id', 'control.protocol'] }
					// onSuccess={ () => {
					// 	onSuccess?.()
					// } }
				/>
			),
		})
	}

	return (
		<Box
			className={ cx(classes.editControlWrapper) }
			ref={ setNodeRef }
			style={ {
				transform: CSS.Transform.toString(transform),
				transition,
			} }
			{ ...listeners }
			{ ...attributes }
		>
			<Box
				className={ cx(classes.editButtonIcon) }
				onMouseUp={ handleEditButtonClick }
				{ ...props }
			>
				<EditIcon size={ 11 } />
			</Box>
			{ children }
		</Box>
	)
}

export default EditControlWrapper
