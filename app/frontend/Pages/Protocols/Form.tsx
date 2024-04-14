import React from 'react'
import { Form, TextInput, Submit, RichText, DynamicInputs, FormConsumer } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Grid } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import CommandForm from '../Commands/Form'
import { Routes } from '@/lib'
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
	console.log({ protocol })
	return (
		<Form
			model="protocol"
			data={ { protocol } }
			method={ method }
			{ ...props }
		>{ form => (
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
							} }>
							<Grid>
								<Grid.Col span={ 6 }>
									<CommandDropdown name="id" />
								</Grid.Col>
								<Grid.Col span={ 6 } >
									<TextInput label="Value" name="command_value_id" />
								</Grid.Col>
							</Grid>
						</DynamicInputs>
					</Grid.Col>

					<Submit>{ protocol.id ? 'Update' : 'Create' } Protocol</Submit>
				</Grid>
			) }</Form>
	)
}

export default ProtocolForm
