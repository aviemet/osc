import React, { useState } from "react"
import { Code, Grid, Paper, ScrollArea, Text } from "@/Components"
import { Form, TextInput, Submit, SwatchInput, FormConsumer, Radio } from "@/Components/Form"
import { ProtocolDropdown } from "@/Components/Dropdowns"
import { useGetProtocol } from "@/queries"
import { FormProps } from "use-inertia-form"

type ScreenControlFormData = {
	control: Partial<Schema.ControlsFormData>
}

export interface EditScreenControlFormProps extends Omit<FormProps<ScreenControlFormData>, "data"> {
	control?: Schema.ControlsFormData
}

const ScreenControlForm = ({ control, ...props }: EditScreenControlFormProps) => {
	const [showingProtocolSlug, setShowingProtocolSlug] = useState(control?.protocol?.slug || "")

	const { data } = useGetProtocol({ slug: showingProtocolSlug }, {
		initialData: control?.protocol || {},
		enabled: !!showingProtocolSlug,
	})

	return (
		<Form<ScreenControlFormData>
			model="control"
			data={ control ? { control } : undefined }
			remember={ false }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
					{ control?.control_type === "slider" && <>
						<TextInput name="min_value" label="Min Value" />
						<TextInput name="max_value" label="Max Value" />
					</> }
				</Grid.Col>

				<FormConsumer<ScreenControlFormData>>{ ({ data }) => <>
					{ data.control.control_type !== "spacer" && <Grid.Col>
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
									<Code style={ { display: "block" } } mb="xs" key={ command.id }>
										{ command.address }
									</Code>
								))
								}
							</Paper>
						</ScrollArea>
					</> }
				</Grid.Col>

				<FormConsumer<ScreenControlFormData>>{ ({ data }) => <>
					{ data.control.control_type !== "spacer" &&
						<Grid.Col>
							<SwatchInput label="Button Color" name="color" />
						</Grid.Col> }
				</> }</FormConsumer>

				<Grid.Col>
					<Radio.Group name="format.flex" label="Display Format">
						<Radio value="shrink" label="Size of Content" />
						<Radio value="expand" label="Fill Available Space" />
					</Radio.Group>
				</Grid.Col>

				<Grid.Col>
					<Submit>{ control?.id ? "Update" : "Create" } Control</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ScreenControlForm
