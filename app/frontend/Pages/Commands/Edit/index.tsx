import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CommandsForm from '../Form'

interface IEditCommandProps {
	command: Schema.CommandsEdit
}

const EditCommand = ({ command }: IEditCommandProps) => {
	const title = `Command: ${command.title}`

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>

				<CommandsForm
					method='put'
					to={ Routes.command(command.id) }
					command={ command }
				/>
			</Section>
		</Page>
	)
}

export default EditCommand
