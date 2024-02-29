import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import EndpointForm from '../Form'

interface INewEndpointProps {
	endpoint: Schema.EndpointsFormData
}

const NewEndpoint = ({ ...data }: INewEndpointProps) => {
	const title = 'New Endpoint'

	return (
		<Page title={ title }>

			<Section>
				<Heading>{ title }</Heading>

				<EndpointForm
					to={ Routes.endpoints() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewEndpoint
