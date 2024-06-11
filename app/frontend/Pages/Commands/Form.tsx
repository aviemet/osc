import React from 'react'
import { Grid, Text } from '@/Components'
import { Form, TextInput, Submit, RichText, Checkbox, DynamicInputs } from '@/Components/Form'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { CommandPayloadTypesDropdown, ServerDropdown } from '@/Components/Dropdowns'
import { exclude } from '@/lib'
import { useListState } from '@mantine/hooks'

type CommandFormData = {
	command: Schema.CommandsFormData
}

export interface CommandFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<CommandFormData>) => boolean|void
	command?: Schema.CommandsFormData
}

const emptyCommand: Partial<Schema.CommandsFormData> = {
	title: '',
	server_id: undefined,
	address: '',
	description: '',
	payload_type: undefined,
	allow_custom_value: false,
	command_values: [],
}

const CommandForm = ({ method = 'post', command, ...props }: CommandFormProps) => {
	const [deletedValues, deletedValueHandlers] = useListState<{ id: string|number, _destroy: boolean}>()

	const handleRemoveCommandValue = (record: Schema.CommandValue) => {
		if(!record?.id) return

		deletedValueHandlers.append({ id: record?.id, _destroy: true })
	}

	const handleSubmit = (form: UseFormProps<{ command: Schema.CommandsFormData }>) => {
		if(deletedValues.length > 0) {
			form.transform((data) => {
				deletedValues.forEach(value => {
					// @ts-ignore - The Rails `_destroy` key shouldn't be represented in types anywhere
					data.command.command_values.push(value)
				})
				return data
			})
		}
	}

	const formCommand = exclude(command, ['id', 'slug', 'created_at', 'updated_at']) ?? emptyCommand

	return (
		<Form
			model="command"
			data={ { command: formCommand as Schema.CommandsFormData } }
			method={ method }
			onSubmit={ handleSubmit }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="address" label="Address String" placeholder='e.g. /path/notation/with/values/1' />
				</Grid.Col>

				<Grid.Col span={ 6 }>
					<ServerDropdown />
				</Grid.Col>

				<Grid.Col span={ 6 }>
					<CommandPayloadTypesDropdown />
				</Grid.Col>

				<Grid.Col>
					<Checkbox label="Allow Custom Values" name="allow_custom_value" />
					<Text>If checked, allows setting custom values for this endpoint when adding it to a Protocol</Text>
				</Grid.Col>

				<Grid.Col>
					<DynamicInputs<Schema.CommandValue>
						label="Allowed Values"
						model="command_values"
						emptyData={ {
							label: '',
							value: '',
						} }
						onRemoveInput={ handleRemoveCommandValue }
					>
						<Grid>
							<Grid.Col span={ 6 }>
								<TextInput label="Value" name="value" />
							</Grid.Col>
							<Grid.Col span={ 6 }>
								<TextInput label="Description" name="label" />
							</Grid.Col>
						</Grid>
					</DynamicInputs>
				</Grid.Col>

				<Grid.Col>
					<RichText name="description" label="Description" />
				</Grid.Col>

				<Submit>{ command?.id ? 'Update' : 'Create' } Command</Submit>
			</Grid>
		</Form>
	)
}

export default CommandForm
