import React from 'react'
import { Form, TextInput, Submit, RichText } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { CommandPayloadTypesDropdown, ServerDropdown } from '@/Components/Dropdowns'

type TCommandFormData = {
	command: Schema.CommandsFormData
}

export interface ICommandFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TCommandFormData>) => boolean|void
	command?: Schema.CommandsFormData
}

const emptyCommand: Partial<Schema.CommandsFormData> = {
	title: '',
	server_id: undefined,
	message: '',
	description: '',
	payload_type: undefined,
	payload: '',
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
			<ServerDropdown />
			<TextInput name="message" label="Message String" placeholder='e.g. /path/notation/with/values/1' />
			<CommandPayloadTypesDropdown />
			<RichText name="description" label="Description" />

			<Submit>{ formCommand.id ? 'Update' : 'Create' } Command</Submit>
		</Form>
	)
}

export default CommandForm
