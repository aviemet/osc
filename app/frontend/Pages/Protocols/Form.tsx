import React from 'react'
import { Form, TextInput, Submit, RichText, DynamicInputs, FormConsumer, Select } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import {  } from '@/Components/Button'
import { CommandDropdown } from '@/Components/Dropdowns'

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
		><FormConsumer>{ form => {
				console.log({ data: form.data })
				return <></>
			} }</FormConsumer>
			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
				</Grid.Col>

				<Grid.Col>
					<RichText name="description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<DynamicInputs
						label="Commands"
						model="commands"
						emptyData={ {
							id: '',
							command_value_id: '',
						} }
					>
						<Grid>

							<Grid.Col span={ 6 }>
								<CommandDropdown name="id" />
							</Grid.Col>

							<Grid.Col span={ 6 } >
								<Select name="command_values" />
							</Grid.Col>

						</Grid>

					</DynamicInputs>
				</Grid.Col>

				<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
			</Grid>
		</Form>
	)
}

export default ProtocolForm
