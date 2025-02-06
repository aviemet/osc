import { useState } from "react"
import { Accordion, Code, Grid, Paper, ScrollArea, Text } from "@/Components"
import { TextInput, Submit, SwatchInput, FormConsumer, Radio } from "@/Components/Form"
import { ProtocolDropdown } from "@/Components/Dropdowns"
import { useGetProtocol } from "@/queries"
import { FormProps, useForm } from "use-inertia-form"
import { DeleteButton } from "@/Components/Button"
import { modals } from "@mantine/modals"
import { Routes } from "@/lib"
import { type ScreenControlFormData } from "@/Features/Controls/Form"

const ControlFormInputs = () => {
	const { data: formData, getData, model } = useForm<ScreenControlFormData>()
	console.log({ model })
	const [showingProtocolSlug, setShowingProtocolSlug] = useState<string>(getData("control.protocol.slug") as string || "")

	const { data } = useGetProtocol({ slug: showingProtocolSlug }, {
		enabled: !!showingProtocolSlug,
	})
	console.log({ data })
	return (
		<Grid>
			<Grid.Col>
				<TextInput name="title" label="Title" />
				{ getData("control.control_type") === "slider" && <>
					<TextInput name="min_value" label="Min Value" />
					<TextInput name="max_value" label="Max Value" />
				</> }
			</Grid.Col>

			<FormConsumer<ScreenControlFormData>>{ ({ data }) => <>
				{ getData("control.control_type") !== "spacer" && <Grid.Col>
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
				{ getData("control.control_type") !== "spacer" &&
						<Grid.Col>
							<SwatchInput label="Button Color" name="color" />
						</Grid.Col> }
			</> }</FormConsumer>

			<Grid.Col>
				<Radio.Group name="format.flex" label="Display Format">
					<Radio value="shrink" label="Size of Content" />
					<Radio value="expand" label="Fill Available Space" />
					<Radio value="break" label="Break to New Line" />
				</Radio.Group>
			</Grid.Col>

			{ getData("control.id") && <Grid.Col>
				<Accordion>
					<Accordion.Item value="delete">
						<Accordion.Control>Permanently Delete</Accordion.Control>
						<Accordion.Panel>
							<Text>Will permanently delete this control</Text>
							<DeleteButton
								href={ Routes.control(getData("control.id")!) }
								onClick={ () => modals.closeAll() }
							>
								Delete
							</DeleteButton>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			</Grid.Col> }

			<Grid.Col>
				<Submit>{ getData("control.id") ? "Update" : "Create" } Control</Submit>
			</Grid.Col>
		</Grid>
	)
}

export default ControlFormInputs
