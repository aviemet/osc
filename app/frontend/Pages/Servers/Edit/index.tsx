import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServersForm from '../Form'

interface IEditServerProps {
	server: Schema.ServersEdit
}

const EditServer = ({ server }: IEditServerProps) => {
	const title = 'Edit Server'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>

				<ServersForm
					method='put'
					to={ Routes.server(server.slug) }
					server={ server }
				/>
			</Section>
		</Page>
	)
}

export default EditServer
