import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TControlFormData = {
	control: Schema.ControlsFormData
}

export interface IControlFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TControlFormData>) => boolean|void
	control?: Schema.ControlsFormData
}

const emptyControl: Partial<Schema.ControlsFormData> = {
	title: '',
	type: undefined,
	position: undefined,
	value: undefined,
	min_value: undefined,
	max_value: undefined,
}

const ControlForm = ({ method = 'post', control, ...props }: IControlFormProps) => {
	return (
		<Form<Partial<Schema.ControlsFormData>>
			model="control"
			data={ control ? { control } : { control: emptyControl } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="type" label="Type" />
			<TextInput name="position" label="Position" />
			<TextInput name="min_value" label="Min_value" />
			<TextInput name="max_value" label="Max_value" />
			<TextInput name="value" label="Value" />
			<Submit>{ control?.id ? 'Update' : 'Create' } Control</Submit>
		</Form>
	)
}

export default ControlForm
