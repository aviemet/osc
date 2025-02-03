import React from "react"
import { Routes } from "@/lib"
import { Divider } from "@/Components"
import { Form, Submit } from "@/Components/Form"
import { ControlContainer } from "@/Features/Controls"
import DndEditControlsInterface from "./DndEditControlsInterface"

import cx from "clsx"
import * as classes from "./EditControls.css"

interface DndControlPositionProps {
	screen: Schema.ScreensEdit
}

const DndControlPosition = ({ screen }: DndControlPositionProps) => {
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

export default DndControlPosition
