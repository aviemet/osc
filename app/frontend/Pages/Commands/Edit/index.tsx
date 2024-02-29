import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CommandsForm from '../Form'

interface IEditCommandProps {
	command: Schema.CommandsEdit
}

const EditCommand = ({ command }: IEditCommandProps) => {
	const title = 'Edit Command'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>

				<CommandsForm
					method='put'
					to={ Routes.command() }
					command={ command }
				/>
			</Section>
		</Page>
	)
}

export default EditCommand
