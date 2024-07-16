import React from 'react'
import { Form, TextInput, Submit, RichText, FormConsumer, FormDataLogger } from '@/Components/Form'
import { UseInertiaFormProps, type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import CommandInputs from './CommandInputs'
import { useGetCommands } from '@/queries'
import SortableDynamicInputs from '@/Components/Form/Components/DynamicInputs/SortableDynamicInputs'
import { exclude } from '@/lib'

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

	const handleFormSubmit = ({ transform }: UseInertiaFormProps<ProtocolFormData>) => {
		transform(data => {
			data.protocol.protocols_commands = data.protocol.protocols_commands.map(cmd => {
				const excludeKeys = [];

				(['value', 'delay'] as const).forEach(check => {
					if(cmd[check] === '') {
						excludeKeys.push(check)
					}
				})

				return exclude(cmd, 'value')
			})

			return data
		})
	}

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
			onSubmit={ handleFormSubmit }
			{ ...props }
		>
			<FormDataLogger />
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
