import React from 'react'
import { Box, Grid, Label } from '@/Components'
import { Form, TextInput, Submit, RichText, FormConsumer, DynamicInputs } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { CommandPayloadTypesDropdown, ServerDropdown } from '@/Components/Dropdowns'
import { RadioButtons } from '@/Components/Inputs'
import { exclude } from '@/lib'

type TCommandFormData = {
	command: Schema.CommandsFormData
}

export interface ICommandFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TCommandFormData>) => boolean|void
	command?: Schema.CommandsFormData
}

const emptyCommand: Partial<Schema.CommandsFormData> = {
	title: '',
	server_id: undefined,
	address: '',
	description: '',
	payload_type: undefined,
	payload: '',
	command_values: [],
}

const CommandForm = ({ method = 'post', command, ...props }: ICommandFormProps) => {
	const handleSubmit = (form: UseFormProps<{ command: Schema.CommandsFormData }>) => {
		console.log({ data: form.data.command })
		// return false
	}

	const formCommand = exclude(command, ['slug', 'created_at', 'updated_at']) ?? emptyCommand

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
					<ServerDropdown />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="address" label="Address String" placeholder='e.g. /path/notation/with/values/1' />
				</Grid.Col>

				<Grid.Col span={ 6 }>
					<CommandPayloadTypesDropdown />
				</Grid.Col>

				<Grid.Col span={ 6 }>
					<Box>
						<Label>Allowed Values</Label>
					</Box>
					<RadioButtons
						name="restrict_values"
						fullWidth
						options={ [
							{ label: 'No Restrictions', value: 'false' },
							{ label: 'From a List of Values', value: 'true' },
						] }
					/>
				</Grid.Col>

				<Grid.Col>
					<DynamicInputs model="command_values" emptyData={ {
						label: '',
						value: '',
					} }>
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

				<Submit>{ formCommand?.id ? 'Update' : 'Create' } Command</Submit>
			</Grid>
		</Form>
	)
}

export default CommandForm
