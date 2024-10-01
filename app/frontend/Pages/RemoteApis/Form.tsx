import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TRemoteApiFormData = {
	remote_api: Schema.RemoteApisFormData
}

export interface IRemoteApiFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TRemoteApiFormData>) => boolean|void
	remote_api: Schema.RemoteApisFormData
}

const RemoteApiForm = ({ method = 'post', remote_api, ...props }: IRemoteApiFormProps) => {
	return (
		<Form
			model="remote_api"
			data={ { remote_api } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="root_url" label="Root_url" />
			<TextInput name="description" label="Description" />
			<TextInput name="auth_token" label="Auth_token" />
			<Submit>{ remote_api.id ? 'Update' : 'Create' } RemoteApi</Submit>
		</Form>
	)
}

export default RemoteApiForm
