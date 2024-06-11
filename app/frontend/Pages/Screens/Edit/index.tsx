import React, { useState } from 'react'
import { Button, Divider, Page, Tabs } from '@/Components'
import { Form, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'
import { useDroppable } from '@dnd-kit/core'
import EditControls from './EditControls'
import { modals } from '@mantine/modals'
import ScreenForm from '../Form'
import NewControlMenu from './NewControlMenu'

import cx from 'clsx'
import * as classes from './ScreenControl.css'

interface IEditScreenProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditScreen = ({ screen, screens }: IEditScreenProps) => {
	const getScreenId = (slug: string): number | false => {
		const currentScreen = screens.find(s => s.slug === slug)
		if(currentScreen?.id) {
			return currentScreen.id
		}

		return false
	}

	const { paths } = useLocation()

	const [currentTabId, setCurrentTabId] = useState(getScreenId(paths[1]))

	const title = 'Edit Screen'

	const droppable = useDroppable({
		id: 'screen_droppable',
	})

	const handleNewScreenModalTrigger = () => {
		modals.open({
			title: 'Create a New Screen',
			children: (
				<ScreenForm
					to={ Routes.screens() }
					onSubmit={ () => modals.closeAll() }
				/>
			),
		})
	}

	const handleTabChange = (value: string | null) => {
		if(value === null) return

		const currentScreenId = getScreenId(value)

		if(currentScreenId) {
			setCurrentTabId(currentScreenId)
		}

		value && router.get(Routes.editScreen(value))
	}

	return (
		<>
			<Page title={ title }>

				<Tabs
					variant="outline"
					value={ paths[1] }
					onChange={ handleTabChange }
				>
					<Tabs.List>
						{ screens.map(iScreen => (
							<Tabs.Tab
								key={ iScreen.id }
								value={ iScreen.slug }
							>
								{ iScreen.title }
							</Tabs.Tab>
						)) }
						<Button
							p="xs"
							variant="subtle"
							onClick={ handleNewScreenModalTrigger }
						>+</Button>

					</Tabs.List>

					{ screens.map(iScreen => (
						<Tabs.Panel
							key={ `${iScreen.id}-${iScreen.slug}` }
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
									filter={ ['screen.id', 'screen.slug', 'screen.created_at', 'screen.updated_at'] }
									remember={ false }
								>
									<EditControls
										screen={ screen }
									/>
									<Divider my="md" />
									<Submit>Save Screen Layout</Submit>
								</Form>
							) }
						</Tabs.Panel>
					)) }
				</Tabs>

				<NewControlMenu menuId={ currentTabId || undefined } />

			</Page>
			<div id="control-form-portal" />
		</>
	)
}

export default EditScreen
