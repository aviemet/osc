import React from 'react'
import { Code, Paper, ScrollArea, Text } from '@/Components'
import { Form, TextInput, Submit } from '@/Components/Form'
import { ProtocolDropdown } from '@/Components/Dropdowns'
import { useGetProtocol } from '@/queries'
import { FormProps } from 'use-inertia-form'

type ControlFormData = {
	control: Schema.ControlsFormData
}

export interface ControlFormProps extends Omit<FormProps<ControlFormData>, 'data'> {
	control?: Schema.ControlsFormData
}

const ControlForm = ({ method = 'post', control, ...props }: ControlFormProps) => {
	return (
		<Form
			model="control"
			data={ control ? { control } : undefined }
			method={ method }
			remember={ false }
			{ ...props }
		>
			<TextInput name="title" label="Title" />
			{ control?.control_type === 'slider' && <>
				<TextInput name="min_value" label="Min Value" />
				<TextInput name="max_value" label="Max Value" />
			</> }

			<ProtocolDropdown onChange={ (protocol, options, form) => {
				console.log({ protocol, data: form.data })
				// const thing = useGetProtocol(control.slug)
			} } />

			{ control?.protocol && <>
				<Text>{ control.protocol.title } commands:</Text>
				<ScrollArea>
					<Paper bg="dark" radius="md" p="md" className="field">
						{ control.protocol?.commands?.map(command => (
							<Code style={ { display: 'block' } } mb="xs" key={ command.id }>
								{ command.address }
							</Code>
						))
						}
					</Paper>
				</ScrollArea>
			</> }
			<Submit>{ control?.id ? 'Update' : 'Create' } Control</Submit>
		</Form>
	)
}

export default ControlForm
