import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowControlProps {
	control: Schema.ControlsShow
}

const ShowControl = ({ control }: IShowControlProps) => {
	const title =  'Control'

	return (
		<Page title={ title }>
			<Section>
				<Group position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editControl(control.id) }>
								Edit Control
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowControl
