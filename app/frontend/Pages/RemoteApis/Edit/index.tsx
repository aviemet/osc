import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import RemoteApisForm from '../Form'

interface IEditRemoteApiProps {
	remote_api: Schema.RemoteApisEdit
}

const EditRemoteApi = ({ remote_api }: IEditRemoteApiProps) => {
	const title = 'Edit Remote Api'

	return (
		<Page title={ title }>
			<Section>
				<Title>{ title }</Title>
				
				<RemoteApisForm
					method='put'
					to={ Routes.remoteApi() }
					remote_api={ remote_api }
				/>
			</Section>
		</Page>
	)
}

export default EditRemoteApi
