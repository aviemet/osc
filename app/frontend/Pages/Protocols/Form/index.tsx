import React from 'react'
import { Form, TextInput, Submit, RichText, DynamicInputs, FormConsumer } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import CommandInputs from './CommandInputs'
import { transformProtocolFormData } from './protocolFormData'

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
			data={ { protocol: transformProtocolFormData(protocol) } }
			method={ method }
			railsAttributes={ false }
			{ ...props }
		><FormConsumer>{ ({ data }) => {
				console.log({ data })
				return <></>
			} }</FormConsumer>
			<Grid>
				<Grid.Col>
					<TextInput name="protocol.title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<RichText name="protocol.description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<DynamicInputs<Schema.Command>
						label="Commands"
						model="commands"
						emptyData={ {
							// @ts-ignore
							id: '',
							command_value_id: '',
						} }
					>
						<CommandInputs />
					</DynamicInputs>
				</Grid.Col>

				<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
			</Grid>
		</Form>
	)
}

export default ProtocolForm
