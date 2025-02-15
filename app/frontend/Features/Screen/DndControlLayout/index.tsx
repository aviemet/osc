import { Routes } from "@/lib"
import { Button, Divider, Group, Link } from "@/Components"
import { Form, FormConsumer, Submit } from "@/Components/Form"
import { ControlContainer } from "@/Features/Controls"
import DndEditControlsInterface from "./DndEditControlsInterface"

import cx from "clsx"
import * as classes from "./EditControls.css"

interface DndControlFormProps {
	screen: Schema.ScreensEdit
}

const DndControlForm = ({ screen }: DndControlFormProps) => {
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

			<FormConsumer>{ ({ isDirty, reset }) => (
				<Group justify="center" mb="sm">

					<Link
						as="button"
						href={ Routes.home() }
						color="red"
						disabled={ !isDirty }
					>
						Cancel
					</Link>

					<Button
						onClick={ reset }
						color="gray"
						disabled={ !isDirty }
					>
						Reset
					</Button>

					<Submit disabled={ !isDirty }>Save Screen Layout</Submit>

				</Group>
			) }</FormConsumer>
		</Form>
	)
}

export default DndControlForm
