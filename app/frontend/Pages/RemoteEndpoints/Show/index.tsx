import React from 'react'
import { Group, Title, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowRemoteEndpointProps {
	remote_endpoint: Schema.RemoteEndpointsShow
}

const ShowRemoteEndpoint = ({ remote_endpoint }: IShowRemoteEndpointProps) => {
	const title =  'RemoteEndpoint'

	return (
		<Page title={ title }>
			<Section>
				<Group position="apart">
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editRemoteEndpoint(remote_endpoint.id) }>
								Edit RemoteEndpoint
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowRemoteEndpoint
