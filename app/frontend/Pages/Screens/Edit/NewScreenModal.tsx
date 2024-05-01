import { Modal } from '@/Components'
import React from 'react'
import ScreenForm from '../Form'
import { Routes } from '@/lib'
import { type TriggerComponent } from '@/Components/Modal'

interface NewScreenModalProps {
	trigger: TriggerComponent
}

const NewScreenModal = ({ trigger }: NewScreenModalProps) => {
	return (
		<Modal trigger={ trigger } title="Create A NewScreen">
			<ScreenForm to={ Routes.screens() } onSubmit={ close } />
		</Modal>
	)
}

export default NewScreenModal
