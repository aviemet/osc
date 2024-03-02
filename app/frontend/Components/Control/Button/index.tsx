import React from 'react'
import { Button } from '@/Components'
import { Routes } from '@/lib'
import axios from 'axios'

interface ButtonControlProps {
	control: Schema.ControlsShow
}

const ButtonControl = ({ control }: ButtonControlProps) => {
	const handleButtonClick = () => {

		axios.put(Routes.apiExecuteProtocol(control.protocol.id))
	}

	return (
		<Button
			onClick={ handleButtonClick }
		>
			{ control.title }
		</Button>
	)
}

export default ButtonControl
