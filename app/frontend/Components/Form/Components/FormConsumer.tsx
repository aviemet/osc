import React from 'react'
import { type UseFormProps, useForm } from 'use-inertia-form'

interface TFormComponentProps<TForm = any> {
	children: (form: UseFormProps<TForm>) => React.ReactNode
}

function FormConsumer <TForm>({ children }: TFormComponentProps<TForm>) {
	const form = useForm<TForm>()

	return (
		<>{ children(form) }</>
	)
}

export default FormConsumer
