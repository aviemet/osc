import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TRemoteEndpointFormData = {
	remote_endpoint: Schema.RemoteEndpointsFormData
}

export interface IRemoteEndpointFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TRemoteEndpointFormData>) => boolean|void
	remote_endpoint: Schema.RemoteEndpointsFormData
}

const RemoteEndpointForm = ({ method = 'post', remote_endpoint, ...props }: IRemoteEndpointFormProps) => {
	return (
		<Form
			model="remote_endpoint"
			data={ { remote_endpoint } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="endpoint" label="Endpoint" />
			<Submit>{ remote_endpoint.id ? 'Update' : 'Create' } RemoteEndpoint</Submit>
		</Form>
	)
}

export default RemoteEndpointForm
