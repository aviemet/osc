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
	command?: Schema.CommandsFormData
}

const emptyCommand: Schema.CommandsFormData = {
	title: '',
}

const CommandForm = ({ method = 'post', command, ...props }: ICommandFormProps) => {
	const formCommand = command ?? emptyCommand

	return (
		<Form
			model="command"
			data={ { command: formCommand } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="message" label="Message" />
			<TextInput name="payload" label="Payload" />

			<Submit>{ formCommand.id ? 'Update' : 'Create' } Command</Submit>
		</Form>
	)
}

export default CommandForm
