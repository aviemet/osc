import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import EndpointsForm from '../Form'

interface IEditEndpointProps {
	endpoint: Schema.EndpointsEdit
}

const EditEndpoint = ({ endpoint }: IEditEndpointProps) => {
	const title = 'Edit Endpoint'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>
				
				<EndpointsForm
					method='put'
					to={ Routes.endpoint() }
					endpoint={ endpoint }
				/>
			</Section>
		</Page>
	)
}

export default EditEndpoint
