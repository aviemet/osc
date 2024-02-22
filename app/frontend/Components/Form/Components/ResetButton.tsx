import { Button } from '@/Components'
import { type ButtonProps } from '@mantine/core'
import React from 'react'
import { useForm } from 'use-inertia-form'

interface IResetButton extends ButtonProps {
	fields?: string|string[]
}

const ResetButton = ({ fields, children, ...props }: IResetButton) => {
	const { reset } = useForm()

	const handleReset = () => {
		if(!fields) return

		reset(fields)
	}

	return (
		<Button onClick={ handleReset } { ...props }>{ children || 'Reset' }</Button>
	)
}

export default ResetButton
