import React, { useEffect } from 'react'
import { type UseFormProps, useForm } from 'use-inertia-form'

interface FormComponentProps<TForm = any> {
	children?: (form: UseFormProps<TForm>) => React.ReactNode
	onChange?: (form: UseFormProps<TForm>) => void
}

function FormConsumer <TForm>({ children, onChange }: FormComponentProps<TForm>) {
	const form = useForm<TForm>()

	useEffect(() => {
		if(!onChange) return
		onChange(form)
	}, [form.data])

	return (
		<>{ children && children(form) }</>
	)
}

export default FormConsumer
