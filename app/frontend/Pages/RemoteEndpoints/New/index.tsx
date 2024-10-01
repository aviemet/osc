import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import RemoteEndpointForm from '../Form'

interface INewRemoteEndpointProps {
	remote_endpoint: Schema.RemoteEndpointsFormData
}

const NewRemoteEndpoint = ({ ...data }: INewRemoteEndpointProps) => {
	const title = 'New Remote Endpoint'

	return (
		<Page title={ title }>

			<Section>
				<Title>{ title }</Title>

				<RemoteEndpointForm
					to={ Routes.remoteEndpoints() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewRemoteEndpoint
