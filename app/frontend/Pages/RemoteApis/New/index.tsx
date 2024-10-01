import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import RemoteApiForm from '../Form'

interface INewRemoteApiProps {
	remote_api: Schema.RemoteApisFormData
}

const NewRemoteApi = ({ ...data }: INewRemoteApiProps) => {
	const title = 'New Remote Api'

	return (
		<Page title={ title }>

			<Section>
				<Title>{ title }</Title>

				<RemoteApiForm
					to={ Routes.remoteApis() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewRemoteApi
