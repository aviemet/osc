import React, { useCallback, useMemo } from 'react'
import { Button, Control, Menu, Modal, Page, Tabs } from '@/Components'
import { CrossIcon } from '@/Components/Icons'
import { Routes } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'
import { useDisclosure } from '@mantine/hooks'
import { Affix, Box } from '@mantine/core'
import {
	DndContext,
	DragOverlay,
	type DragMoveEvent,
	type DragEndEvent,
	type DragStartEvent,
	useDroppable,
	useSensors,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	closestCenter,
} from '@dnd-kit/core'
import {
	arrayMove,
	rectSwappingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { AddControlsInterface } from '@/Features'
import ControlForm from '@/Pages/Controls/Form'
import ScreenForm from '../Form'
import NewScreenModal from './NewScreenModal'

import cx from 'clsx'
import * as classes from './ScreenControl.css'
import DraggableControl from './DraggableControl'

interface IEditScreenProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditScreen = ({ screen, screens }: IEditScreenProps) => {
	const { paths } = useLocation()

	const title = 'Edit Screen'

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)

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
		<DndContext
			sensors={ sensors }
			collisionDetection={ closestCenter }
			onDragEnd={ handleDragEnd }
		>
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

								<SortableContext
									items={ useMemo(() => screen.controls.map(control => control.id), [screen.controls]) }
									strategy={ rectSwappingStrategy }
								>
									{ screen?.controls?.map(control => <DraggableControl key={ control.id } control={ control } />) }
								</SortableContext>
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
