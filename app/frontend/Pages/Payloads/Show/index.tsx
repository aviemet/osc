import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowPayloadProps {
	payload: Schema.PayloadsShow
}

const ShowPayload = ({ payload }: IShowPayloadProps) => {
	const title =  'Payload'

	return (
		<Page title={ title }>
			<Section>
				<Group position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPayload(payload.id) }>
								Edit Payload
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowPayload
