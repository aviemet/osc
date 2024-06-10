import React, { useState } from 'react'
import { Code, Grid, Paper, ScrollArea, Text } from '@/Components'
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

const ControlForm = ({ control, ...props }: ControlFormProps) => {
	console.log({ control })
	const [showingProtocolSlug, setShowingProtocolSlug] = useState(control?.protocol?.slug)

	const { data, isLoading, error } = useGetProtocol({ slug: showingProtocolSlug }, {
		enabled: !!showingProtocolSlug,
	})
	console.log({ data })

	return (
		<Form
			model="control"
			data={ control ? { control } : undefined }
			remember={ false }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
					{ control?.control_type === 'slider' && <>
						<TextInput name="min_value" label="Min Value" />
						<TextInput name="max_value" label="Max Value" />
					</> }
				</Grid.Col>

				<Grid.Col>
					<ProtocolDropdown
						onChange={ (protocol, options, form) => {
							console.log({ protocol, data: form.data })
							// const thing = useGetProtocol(control.slug)
						} } />
				</Grid.Col>
				<Grid.Col>
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
				</Grid.Col>

				<Grid.Col>
					<Submit>{ control?.id ? 'Update' : 'Create' } Control</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ControlForm
