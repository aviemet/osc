import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TScreenFormData = {
	screen: Schema.ScreensFormData
}

export interface ScreenFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TScreenFormData>) => boolean|void
	screen?: Partial<Schema.ScreensFormData>
}

export interface ScreenEditFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TScreenFormData>) => boolean|void
	screen: Schema.ScreensFormData
}

const emptyScreen: Partial<Schema.ScreensFormData> = {
	title: '',
}

const ScreenForm = ({ method = 'post', screen, ...props }: ScreenFormProps) => {
	return (
		<Form<Partial<Schema.ScreensFormData>>
			model="screen"
			data={ screen ? { screen } : { screen : emptyScreen } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<Submit>{ screen?.id ? 'Update' : 'Create' } Screen</Submit>
		</Form>
	)
}

export default ScreenForm
