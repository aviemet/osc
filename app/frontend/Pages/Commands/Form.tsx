import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TCommandFormData = {
	command: Schema.CommandsFormData
}

export interface ICommandFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TCommandFormData>) => boolean|void
	command: Schema.CommandsFormData
}

const CommandForm = ({ method = 'post', command, ...props }: ICommandFormProps) => {
	return (
		<Form
			model="command"
			data={ { command } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="endpoint" label="Endpoint" />
			<TextInput name="payload" label="Payload" />
			<Submit>{ command.id ? 'Update' : 'Create' } Command</Submit>
		</Form>
	)
}

export default CommandForm
