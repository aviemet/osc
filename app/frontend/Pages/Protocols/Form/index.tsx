import React from 'react'
import { Form, TextInput, Submit, RichText } from '@/Components/Form'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import CommandInputs from './CommandInputs'
import { useGetCommands } from '@/queries'
import SortableDynamicInputs from '@/Components/Form/Components/DynamicInputs/SortableDynamicInputs'

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
	const { data: commands } = useGetCommands({
		initialData: protocol.commands as Schema.CommandsEdit[],
	})

	return (
		<Form
			model="protocol"
			data={ { protocol } }
			method={ method }
			filter={ [
				'id',
				'slug',
				'created_at',
				'updated_at',
			] }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<RichText name="description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<SortableDynamicInputs
						label="Commands"
						model="protocols_commands"
						emptyData={ {
							command_id: NaN,
							command_value_id: NaN,
							value: '',
							delay: '',
							order: NaN,
							key: NaN,
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
