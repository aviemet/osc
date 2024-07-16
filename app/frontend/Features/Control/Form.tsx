import React, { useState } from 'react'
import { Code, Grid, Paper, ScrollArea, Text } from '@/Components'
import { Form, TextInput, Submit, SwatchInput, FormConsumer } from '@/Components/Form'
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
	const [showingProtocolSlug, setShowingProtocolSlug] = useState(control?.protocol?.slug || '')

	const { data } = useGetProtocol({ slug: showingProtocolSlug }, {
		initialData: control?.protocol || {},
		enabled: !!showingProtocolSlug,
	})

	return (
		<Form<ControlFormData>
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

				<FormConsumer<ControlFormData>>{ ({ data }) => <>
					{ data.control.control_type !== 'spacer' && <Grid.Col>
						<ProtocolDropdown
							onChange={ (protocol, options, form) => {
								const option = options.find(option => option.value === protocol)
								if(option) {
									setShowingProtocolSlug(option.slug)
								}
							} } />
					</Grid.Col> }
				</> }</FormConsumer>

				<Grid.Col>
					{ data && <>
						<Text>{ data.title } commands:</Text>
						<ScrollArea>
							<Paper bg="dark" radius="md" p="md" className="field">
								{ data.commands?.map(command => (
									<Code style={ { display: 'block' } } mb="xs" key={ command.id }>
										{ command.address }
									</Code>
								))
								}
							</Paper>
						</ScrollArea>
					</> }
				</Grid.Col>

				<FormConsumer<ControlFormData>>{ ({ data }) => <>
					{ data.control.control_type !== 'spacer' &&
						<Grid.Col>
							<SwatchInput label="Button Color" name="color" />
						</Grid.Col> }
				</> }</FormConsumer>

				<Grid.Col>
					<Submit>{ control?.id ? 'Update' : 'Create' } Control</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ControlForm
