import React from 'react'
import { Form, TextInput, Submit, RichText } from '@/Components/Form'
import { DynamicInputs, type UseFormProps } from 'use-inertia-form'
import { ModalFormButton } from '@/Components/Button'
import CommandForm from '../Commands/Form'
import { Routes } from '@/lib'

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
			<RichText name="description" label="Description" />
			<ModalFormButton form={ <CommandForm to={ Routes.commands() } /> } title="WTF">Command</ModalFormButton>
			{ /* <DynamicInputs emptyData={ {
				protocol_id: '',
			} }>

			</DynamicInputs> */ }

			<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
		</Form>
	)
}

export default ProtocolForm
