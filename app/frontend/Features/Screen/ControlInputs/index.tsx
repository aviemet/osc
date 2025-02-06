import { useState } from "react"
import { Accordion, Code, Grid, Paper, ScrollArea, Text } from "@/Components"
import { TextInput, SwatchInput, Radio } from "@/Components/Form"
import { ProtocolDropdown } from "@/Components/Dropdowns"
import { useGetProtocol } from "@/queries"
import { useForm } from "use-inertia-form"
import { DeleteButton } from "@/Components/Button"
import { modals } from "@mantine/modals"
import { isUnset, Routes } from "@/lib"
import { type ScreenControlFormData } from "@/Features/Controls/Form"

interface ControlFormInputsProps {
	index?: number
	closeModal?: () => void
}

const ControlFormInputs = ({ index, closeModal }: ControlFormInputsProps) => {
	const modelBase = `screen.controls[${index}]`
	const { getData } = useForm<ScreenControlFormData>()

	const [showingProtocolSlug, setShowingProtocolSlug] = useState<string>(getData(`${modelBase}.protocol.slug`) as string || "")

	const { data } = useGetProtocol({ slug: showingProtocolSlug }, {
		enabled: !!showingProtocolSlug,
	})

	return (
		<Grid>
			<Grid.Col>
				<TextInput name="title" label="Title" />
				{ getData(`${modelBase}.control_type`) === "slider" && <>
					<TextInput name="min_value" label="Min Value" />
					<TextInput name="max_value" label="Max Value" />
				</> }
			</Grid.Col>

			{ getData(`${modelBase}.control_type`) !== "spacer" && <Grid.Col>
				<ProtocolDropdown
					onChange={ (protocol, options, form) => {
						const option = options.find(option => option.value === protocol)
						if(option) {
							setShowingProtocolSlug(option.slug)
						}
					} } />
			</Grid.Col> }

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

			{ getData(`${modelBase}.control_type`) !== "spacer" &&
				<Grid.Col>
					<SwatchInput label="Button Color" name="color" />
				</Grid.Col>
			}

			<Grid.Col>
				<Radio.Group name="format.flex" label="Display Format">
					<Radio value="shrink" label="Size of Content" />
					<Radio value="expand" label="Fill Available Space" />
					<Radio value="break" label="Break to New Line" />
				</Radio.Group>
			</Grid.Col>

			{ !isUnset(getData(`${modelBase}.id`)) && <Grid.Col>
				<Accordion>
					<Accordion.Item value="delete">
						<Accordion.Control>Permanently Delete</Accordion.Control>
						<Accordion.Panel>
							<Text>Will permanently delete this control</Text>
							<DeleteButton
								href={ Routes.control(getData(`${modelBase}.id`)!) }
								onClick={ () => modals.closeAll() }
							>
								Delete
							</DeleteButton>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			</Grid.Col> }

			{ /*
			<Grid.Col>
				<Button onClick={ handleUpdateClick } w="100%">Update Control</Button>
			</Grid.Col>
			*/ }
		</Grid>
	)
}

export default ControlFormInputs
