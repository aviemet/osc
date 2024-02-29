import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TServerFormData = {
	server: Schema.ServersFormData
}

export interface IServerFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TServerFormData>) => boolean|void
	server: Schema.ServersFormData
}

const ServerForm = ({ method = 'post', server, ...props }: IServerFormProps) => {
	return (
		<Form
			model="server"
			data={ { server } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="hostname" label="Hostname" />
			<TextInput name="port" label="Port" />
			<TextInput name="description" label="Description" />
			<Submit>{ server.id ? 'Update' : 'Create' } Server</Submit>
		</Form>
	)
}

export default ServerForm
