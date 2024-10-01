import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import RemoteEndpointsForm from '../Form'

interface IEditRemoteEndpointProps {
	remote_endpoint: Schema.RemoteEndpointsEdit
}

const EditRemoteEndpoint = ({ remote_endpoint }: IEditRemoteEndpointProps) => {
	const title = 'Edit Remote Endpoint'

	return (
		<Page title={ title }>
			<Section>
				<Title>{ title }</Title>
				
				<RemoteEndpointsForm
					method='put'
					to={ Routes.remoteEndpoint() }
					remote_endpoint={ remote_endpoint }
				/>
			</Section>
		</Page>
	)
}

export default EditRemoteEndpoint
