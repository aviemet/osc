import React from 'react'
import { Button, Control, Menu, Modal, Page, Tabs } from '@/Components'
import { DndContext, DragOverlay, type DragMoveEvent, type DragEndEvent, type DragStartEvent, useDroppable } from '@dnd-kit/core'
import { useDisclosure } from '@mantine/hooks'
import { Routes } from '@/lib'
import { CrossIcon } from '@/Components/Icons'
import ScreenForm from '../Form'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'
import { AddControlsInterface } from '@/Features'
import ControlForm from '@/Pages/Controls/Form'
import { Affix, Box } from '@mantine/core'
import cx from 'clsx'
import * as classes from './ScreenControl.css'
import NewScreenModal from './NewScreenModal'
import DraggableControl from './draggableControl'

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

	const handleDragEnd = (event: DragEndEvent) => {
		// newControlModalOpen()
		console.log({ dragEnd: event })
		// router.post(Routes.controls(), {
		// 	control: {
		// 		type: event.active.id,
		// 	},
		// })
	}

	return (
		<DndContext onDragEnd={ handleDragEnd }>
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
						<Tabs.Panel key={ iScreen.id } value={ iScreen.slug } className={ classes.tabsPanel } ref={ droppable.setNodeRef }>
							{ iScreen.id === screen.id && (
								<>
									{ screen?.controls?.map(control => <DraggableControl key={ control.id } control={ control } />) }
								</>
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



			{ /* <Modal opened={ newControlModalOpened } onClose={ newControlModalClose }>
				<ControlForm to={ Routes.controls() } onSubmit={ newControlModalClose } />
			</Modal> */ }

		</DndContext>
	)
}

export default EditScreen
