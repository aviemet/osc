import React from 'react'
import { Form, TextInput, Submit, RichText, DynamicInputs, FormConsumer, Textarea, Select } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import CommandInputs from './CommandInputs'
import { transformProtocolFormData } from './protocolFormData'
import { CommandDropdown } from '@/Components/Dropdowns'
import { commandsQuery } from '@/queries'
import { SortableList } from '@/Components/Sortable'
import SortableDynamicInputs from '@/Components/Form/DynamicInputs/SortableDynamicInputs'

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

	return (
		<Form
			model="protocol"
			data={ { protocol: transformProtocolFormData(protocol) } }
			method={ method }
			{ ...props }
		>
			<FormConsumer>{ ({ data }) => {
				console.log({ data: data.protocol.protocols_commands.map(thing => ({
					id: thing.id,
					order: thing.order,
					key: thing.key,
				})) })
				return <></>
			} }</FormConsumer>


			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<Textarea name="description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<SortableDynamicInputs<Schema.ProtocolsCommandsFormData>
						label="Commands"
						model="protocols_commands"
						emptyData={ {
							// @ts-ignore
							command_id: '',
							command_value_id: '',
							value: '',
							delay: '',
							order: '',
							key: '',
						} }
					>
						<CommandInputs commands={ commands || [] } />
					</SortableDynamicInputs>
				</Grid.Col>

				<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
			</Grid>
		</Form>
	)
}

export default ProtocolForm
