import React from "react"
import { Title, Page, Section } from "@/Components"
import { Routes } from "@/lib"
import CommandsForm from "../Form"

interface IEditCommandProps {
	command: Schema.CommandsEdit
}

const EditCommand = ({ command }: IEditCommandProps) => {
	const title = `Command: ${command.title}`

	return (
		<Page title={ title }>
			<Section>
				<Title>{ title }</Title>

				<CommandsForm
					method='put'
					to={ Routes.command(command.slug) }
					command={ command }
				/>
			</Section>
		</Page>
	)
}

export default EditCommand
