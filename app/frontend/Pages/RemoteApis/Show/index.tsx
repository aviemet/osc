import React from 'react'
import { Group, Title, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowRemoteApiProps {
	remote_api: Schema.RemoteApisShow
}

const ShowRemoteApi = ({ remote_api }: IShowRemoteApiProps) => {
	const title =  'RemoteApi'

	return (
		<Page title={ title }>
			<Section>
				<Group position="apart">
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editRemoteApi(remote_api.id) }>
								Edit RemoteApi
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowRemoteApi
