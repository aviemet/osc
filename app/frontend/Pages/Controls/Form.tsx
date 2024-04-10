import React from 'react'
import { Code, Paper, ScrollArea, Text } from '@/Components'
import { Form, TextInput, Submit } from '@/Components/Form'
import { ProtocolDropdown } from '@/Components/Dropdowns'
import { protocolQuery } from '@/queries'
import { FormProps } from 'use-inertia-form'

type TControlFormData = {
	control: Partial<Schema.ControlsFormData>
}

export interface ControlFormProps extends Omit<FormProps<TControlFormData>, 'data'> {
	control?: Schema.ControlsFormData
}

const emptyControl: Partial<Schema.ControlsFormData> = {
	title: '',
	control_type: undefined,
	order: undefined,
	value: undefined,
	min_value: undefined,
	max_value: undefined,
}

const ControlForm = ({ method = 'post', control, ...props }: ControlFormProps) => {
	let protocol = control?.protocol

	return (
		<Form
			model="control"
			data={ control ? { control } : { control: emptyControl } }
			method={ method }
			remember={ false }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			{ control?.control_type === 'slider' && <>
				<TextInput name="min_value" label="Min Value" />
				<TextInput name="max_value" label="Max Value" />
			</> }

			<ProtocolDropdown onChange={ (protocol, form) => {
				console.log({ protocol, data: form.data })
				// const thing = protocolQuery(control.slug)
			} } />

			{ protocol && <Text>{ protocol?.title } commands:</Text> }
			<ScrollArea>
				<Paper bg="dark" radius="md" p="md" className="field">{ protocol?.commands?.map(command => (
					<Code style={ { display: 'block' } } mb="xs" key={ command.id }>{ command.address }</Code>
				))
				}</Paper>
			</ScrollArea>

			<Submit>{ control?.id ? 'Update' : 'Create' } Control</Submit>
		</Form>
	)
}

export default ControlForm
