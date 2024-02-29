import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TEndpointFormData = {
	endpoint: Schema.EndpointsFormData
}

export interface IEndpointFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TEndpointFormData>) => boolean|void
	endpoint: Schema.EndpointsFormData
}

const EndpointForm = ({ method = 'post', endpoint, ...props }: IEndpointFormProps) => {
	return (
		<Form
			model="endpoint"
			data={ { endpoint } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="url" label="Url" />
			<TextInput name="description" label="Description" />
			<Submit>{ endpoint.id ? 'Update' : 'Create' } Endpoint</Submit>
		</Form>
	)
}

export default EndpointForm
