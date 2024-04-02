import React from 'react'
import { EditIcon } from '../../Components/Icons'
import * as classes from './Control.css'
import { modals } from '@mantine/modals'
import ControlForm from '@/Pages/Controls/Form'
import { Routes } from '@/lib'

interface EditButtonProps {
	control: Schema.ControlsEdit
}

const EditButton = ({ control }: EditButtonProps) => {
	return (
		<EditIcon
			size={ 11 }
			className={ classes.editButtonIcon }
			onClick={ () => {
				modals.open({
					title: 'Edit Control',
					children: (
						<ControlForm
							remember={ false }
							control={ control }
							to={ Routes.apiControl(control.id) }
							onSubmit={ () => modals.closeAll() }
						/>
					),
				})
			} }
		/>
	)
}

export default EditButton
