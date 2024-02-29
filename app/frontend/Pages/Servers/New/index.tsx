import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServerForm from '../Form'

interface INewServerProps {
	server: Schema.ServersFormData
}

const NewServer = ({ ...data }: INewServerProps) => {
	const title = 'New Server'

	return (
		<Page title={ title }>

			<Section>
				<Heading>{ title }</Heading>

				<ServerForm
					to={ Routes.servers() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewServer
