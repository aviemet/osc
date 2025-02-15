import React from "react"
import { Form, TextInput, Submit, NumberInput } from "@/Components/Form"
import { Grid } from "@/Components"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

type ScreenFormData = {
	screen: Schema.ScreensFormData
}

export interface ScreenFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ScreenFormData>) => boolean | void
	screen?: Schema.ScreensFormData
}

const ScreenForm = ({ method = "post", screen, ...props }: ScreenFormProps) => {
	return (
		<Form
			model="screen"
			data={ screen ? { screen } : undefined }
			method={ method }
			filter={ ["id", "slug", "screen.created_at", "screen.updated_at"] }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="title" label="Title" />
				</Grid.Col>

				<Grid.Col span={ 4 }>
					<NumberInput name="columns" label="Columns" min={ 1 } max={ 12 } />
				</Grid.Col>

				<Grid.Col span={ 4 }>
					<NumberInput name="row_height" label="Row Height" />
				</Grid.Col>

				<Grid.Col>
					<Submit>{ screen?.id ? "Update" : "Create" } Screen</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ScreenForm
