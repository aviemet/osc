import React, { useState } from 'react'
import Button from './index'
import { Modal } from '@/Components'
import { useMantineTheme, type ModalProps, type ButtonProps } from '@mantine/core'
import axios from 'axios'

interface ModalFormButtonProps {
	children?: string | React.ReactElement
	form: React.ReactElement
	title: string
	buttonProps?: ButtonProps
	modalProps?: Partial<ModalProps>
	onSubmit?: (form: Inertia.FormProps) => boolean|void
	onSuccess?: (data: { id: string|number }) => void
}

const ModalFormButton = ({
	children = 'New',
	form,
	title,
	buttonProps = {},
	modalProps = {},
	onSubmit,
	onSuccess,
}: ModalFormButtonProps) => {
	const theme = useMantineTheme()

	const handleSubmit = ({ data, method, to, setError }: Inertia.FormProps) => {
		if(!to) return

		axios[method](to, { ...data, redirect: false })
			.then(response => {
				if(response.statusText === 'OK' || response.statusText === 'Created') {
					if(onSuccess) onSuccess(response.data)
				}
			})
			.catch(error => {
				if(error.response.data?.errors) {
					setError(error.response.data.errors)
				}
			})

		// Return false to prevent default form action
		return false
	}

	return (
		<>
			<Modal
				trigger={ <Button { ...buttonProps } >{ children }</Button> }
				title={ title }
				{ ...Object.assign({ size: theme.breakpoints.md }, modalProps) }
			>
				{ close => React.cloneElement(form, {
					onSubmit: onSubmit ? onSubmit : handleSubmit,
				}) }
			</Modal>
		</>
	)
}

export default ModalFormButton
