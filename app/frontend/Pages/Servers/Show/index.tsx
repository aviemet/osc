import React from 'react'
import { Group, Title, Menu, Page, Section, Text } from '@/Components'
import { Routes } from '@/lib'

interface IShowServerProps {
	server: Schema.ServersShow
}

const ShowServer = ({ server }: IShowServerProps) => {
	const title =  'Server'

	return (
		<Page title={ title }>
			<Section>
				<Group>
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editServer(server.slug) }>
								Edit Server
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Text>{ `${server.hostname}${server?.port ? `:${server.port}` : ''}` }</Text>

				<Text>{ server?.description }</Text>
			</Section>
		</Page>
	)
}

export default ShowServer
