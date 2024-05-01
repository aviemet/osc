import React from 'react'
import { Grid } from '@/Components'
import { Form, TextInput, Submit, Textarea, NumberInput } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TServerFormData = {
	server: Schema.ServersFormData
}

export interface IServerFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TServerFormData>) => boolean|void
	server: Schema.ServersFormData
}

const ServerForm = ({ method = 'post', server, ...props }: IServerFormProps) => {
	return (
		<Form
			model="server"
			data={ { server } }
			method={ method }
			{ ...props }
		>
			<Grid>

				<Grid.Col>
					<TextInput name="title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="hostname" label="Hostname (or IP Address)" />
				</Grid.Col>

				<Grid.Col>
					<NumberInput name="port" label="Port" />
				</Grid.Col>

				<Grid.Col>
					<Textarea name="description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<Submit>{ server.id ? 'Update' : 'Create' } Server</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default ServerForm
