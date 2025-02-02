import React from "react"
import { Routes } from "@/lib"
import { Divider } from "@/Components"
import { Form, Submit } from "@/Components/Form"
import DndEditControlsInterface from "./DndEditControlsInterface"
import { ControlContainer } from "@/Features/Controls"

import cx from "clsx"
import * as classes from "./EditControls.css"

interface EditScreenFormProps {
	screen: Schema.ScreensEdit
}

const EditScreenForm = ({ screen }: EditScreenFormProps) => {
	return (
		<Form
			model="screen"
			data={ { screen: screen } }
			to={ Routes.screen(screen.slug) }
			method="patch"
			filter={ ["screen.id", "screen.slug", "screen.created_at", "screen.updated_at"] }
			remember={ false }
		>

			<ControlContainer className={ cx(classes.editControlsForm) }>
				<DndEditControlsInterface screen={ screen } />
			</ControlContainer>

			<Divider my="md" />

			<Submit>Save Screen Layout</Submit>
		</Form>
	)
}

export default EditScreenForm
