import React from 'react'
import { Button, Modal, Page, Tabs } from '@/Components'
import { useDisclosure } from '@mantine/hooks'
import { Routes } from '@/lib'
import { CrossIcon } from '@/Components/Icons'
import ScreenControlEditInterface from './ScreenControlEditInterface'
import ScreenForm from '../Form'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'

interface IEditScreenProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditScreen = ({ screen, screens }: IEditScreenProps) => {
	const { paths } = useLocation()

	const [opened, { open, close }] = useDisclosure(false)

	const title = 'Edit Screen'

	return (
		<>
			<Page title={ title }>
				<Tabs
					variant="pills"
					value={ paths[1] }
					onChange={ value => value && router.get(Routes.editScreen(value)) }
				>
					<Tabs.List>
						{ screens.map(iScreen => (
							<Tabs.Tab key={ iScreen.id } value={ iScreen.slug }>{ iScreen.title }</Tabs.Tab>
						)) }
						<Button onClick={ open }>+</Button>
						<Tabs.Link href={ Routes.screen(screen.slug) } position='right'><CrossIcon /></Tabs.Link>
					</Tabs.List>

					{ screens.map(iScreen => (
						<Tabs.Panel key={ iScreen.id } value={ iScreen.slug }>
							<>{ iScreen.id === screen.id && <ScreenControlEditInterface screen={ screen } /> }</>
						</Tabs.Panel>
					)) }

				</Tabs>
			</Page>

			<Modal opened={ opened } onClose={ close }>
				<ScreenForm to={ Routes.screens() } onSubmit={ close } />
			</Modal>
		</>
	)
}

export default EditScreen
