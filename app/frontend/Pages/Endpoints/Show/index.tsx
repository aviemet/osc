import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowEndpointProps {
	endpoint: Schema.EndpointsShow
}

const ShowEndpoint = ({ endpoint }: IShowEndpointProps) => {
	const title =  'Endpoint'

	return (
		<Page title={ title }>
			<Section>
				<Group position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editEndpoint(endpoint.id) }>
								Edit Endpoint
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowEndpoint
