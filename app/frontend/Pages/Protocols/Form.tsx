import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TProtocolFormData = {
	protocol: Schema.ProtocolsFormData
}

export interface IProtocolFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TProtocolFormData>) => boolean|void
	protocol: Schema.ProtocolsFormData
}

const ProtocolForm = ({ method = 'post', protocol, ...props }: IProtocolFormProps) => {
	return (
		<Form
			model="protocol"
			data={ { protocol } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
		</Form>
	)
}

export default ProtocolForm
