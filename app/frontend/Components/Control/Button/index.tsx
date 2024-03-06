import React from 'react'
import { Button } from '@/Components'
import { Routes } from '@/lib'
import { type ControlProps } from '..'
import axios from 'axios'
import EditButton from '../EditButton'

const ButtonControl = ({ control, edit = false, ...props }: ControlProps) => {
	const handleButtonClick = () => {
		if(edit) return

		axios.put(Routes.apiExecuteProtocol(control.protocol.id))
	}

	return (
		<Button
			onClick={ handleButtonClick }
			{ ...props }
		>
			{ edit && <EditButton control={ control } /> }
			{ control.title }
		</Button>
	)
}

export default ButtonControl
