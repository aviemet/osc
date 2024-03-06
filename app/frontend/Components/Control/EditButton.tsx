import React from 'react'
import { EditIcon } from '../Icons'
import * as classes from './Control.css'
import { ActionIcon, Modal } from '@/Components'
import ControlForm from '@/Pages/Controls/Form'

interface EditButtonProps {
	control: Schema.ControlsEdit
}

const EditButton = ({ control }: EditButtonProps) => {
	return (
		<Modal
			title="Edit Control"
			trigger={ <EditIcon size={ 11 } className={ classes.editButtonIcon } /> }
		>{ close => (
				<ControlForm control={ control } />
			) }</Modal>
	)
}

export default EditButton
