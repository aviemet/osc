import React from 'react'
import { Button, Menu, Page, Tabs } from '@/Components'
import { Form } from '@/Components/Form'
import { Routes } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'
import { Affix } from '@mantine/core'
import { useDroppable } from '@dnd-kit/core'
import NewScreenModal from './NewScreenModal'
import EditControls from './EditControls'
import { AddControlsInterface } from '@/Features'

import cx from 'clsx'
import * as classes from './ScreenControl.css'

interface IEditScreenProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditScreen = ({ screen, screens }: IEditScreenProps) => {
	const { paths } = useLocation()

	const title = 'Edit Screen'

	const droppable = useDroppable({
		id: 'screen_droppable',
	})

	return (
		<Page title={ title }>

			{ /* <AddControlsInterface /> */ }

			<Tabs
				variant="outline"
				value={ paths[1] }
				onChange={ value => value && router.get(Routes.editScreen(value)) }
			>
				<Tabs.List>
					{ screens.map(iScreen => (
						<Tabs.Tab key={ iScreen.id } value={ iScreen.slug }>{ iScreen.title }</Tabs.Tab>
					)) }
					<NewScreenModal trigger={ <Button p="xs" variant="subtle">+</Button> } />
				</Tabs.List>

				{ screens.map(iScreen => (
					<Tabs.Panel
						key={ iScreen.id }
						value={ iScreen.slug }
						className={ cx(classes.tabsPanel) }
						ref={ droppable.setNodeRef }
					>
						{ iScreen.id === screen.id && (
							<Form
								model="screen"
								data={ { screen: screen } }
								to={ Routes.screen(screen.slug) }
								method="patch"
								filter={ ['created_at', 'updated_at', 'screen.controls[].created_at', 'screen.controls[].updated_at'] }
							>
								<EditControls
									screen={ screen }
									screens={ screens }
								/>
							</Form>
						) }
					</Tabs.Panel>
				)) }

			</Tabs>

			<Affix>
				<Menu position="top-end">
					<Menu.Target>
						<Button radius="xl" p="sm" m="lg">+</Button>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Label>Button</Menu.Label>
						{ /* <Menu.Label>Slider</Menu.Label> */ }
						{ /* <Menu.Label>Spacer</Menu.Label> */ }
					</Menu.Dropdown>
				</Menu>
			</Affix>
		</Page>
	)
}

export default EditScreen
