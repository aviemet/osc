import React from 'react'
import { Title, Page, Section } from '@/Components'
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
				<Title>{ title }</Title>

				<ServerForm
					to={ Routes.servers() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewServer
