import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TPayloadFormData = {
	payload: Schema.PayloadsFormData
}

export interface IPayloadFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TPayloadFormData>) => boolean|void
	payload: Schema.PayloadsFormData
}

const PayloadForm = ({ method = 'post', payload, ...props }: IPayloadFormProps) => {
	return (
		<Form
			model="payload"
			data={ { payload } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<TextInput name="endpoint" label="Endpoint" />
			<TextInput name="payload" label="Payload" />
			<Submit>{ payload.id ? 'Update' : 'Create' } Payload</Submit>
		</Form>
	)
}

export default PayloadForm
