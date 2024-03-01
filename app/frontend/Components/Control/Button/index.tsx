import React from 'react'
import { Button } from '@/Components'

interface ButtonControlProps {
	control: Schema.ControlsShow
}

const ButtonControl = ({ control }: ButtonControlProps) => {
	const handleButtonClick = () => {
		// trigger protocol
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
