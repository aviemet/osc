import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CommandForm from '../Form'

interface INewCommandProps {
	command: Schema.CommandsFormData
}

const NewCommand = ({ ...data }: INewCommandProps) => {
	const title = 'New Command'

	return (
		<Page title={ title }>

			<Section>
				<Heading>{ title }</Heading>

				<CommandForm
					to={ Routes.commands() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewCommand
