import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TScreenFormData = {
	screen: Schema.ScreensFormData
}

export interface IScreenFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TScreenFormData>) => boolean|void
	screen: Schema.ScreensFormData
}

const ScreenForm = ({ method = 'post', screen, ...props }: IScreenFormProps) => {
	return (
		<Form
			model="screen"
			data={ { screen } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="order" label="Order" />
			<Submit>{ screen.id ? 'Update' : 'Create' } Screen</Submit>
		</Form>
	)
}

export default ScreenForm
