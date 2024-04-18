import React from 'react'
import { Form, TextInput, Submit, RichText, DynamicInputs, FormConsumer, Textarea } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import CommandInputs from './CommandInputs'
import { transformProtocolFormData } from './protocolFormData'
import { CommandDropdown } from '@/Components/Dropdowns'
import { commandsQuery } from '@/queries'

type ProtocolFormData = {
	protocol: Schema.ProtocolsFormData
}

export interface IProtocolFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ProtocolFormData>) => boolean|void
	protocol: Schema.ProtocolsFormData
}

const ProtocolForm = ({ method = 'post', protocol, ...props }: IProtocolFormProps) => {
	const { data: commands } = commandsQuery({ initialData: protocol.commands })
	console.log({ commands })
	return (
		<Form
			model="protocol"
			data={ { protocol: transformProtocolFormData(protocol) } }
			method={ method }
			{ ...props }
		>
			<FormConsumer>{ ({ data }) => {
				console.log({ data })
				return <></>
			} }</FormConsumer>
			<Grid>
				<Grid.Col>
					<TextInput name="protocol.title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<Textarea name="protocol.description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<DynamicInputs<Schema.Command>
						label="Commands"
						model="protocols_commands"
						emptyData={ {
							// @ts-ignore
							command_id: '',
							command_value_id: '',
							value: '',
							delay: '',
						} }
					>
						<CommandInputs commands={ commands || [] } />
					</DynamicInputs>
				</Grid.Col>

				<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
			</Grid>
		</Form>
	)
}

export default ProtocolForm
