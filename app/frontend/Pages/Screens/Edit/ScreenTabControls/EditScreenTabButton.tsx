import React from 'react'
import { Routes } from '@/lib'
import { Accordion, Box, Divider, Text } from '@/Components'
import { EditIcon } from '@/Components/Icons'
import { modals } from '@mantine/modals'
import ScreenForm from '../../New/Form'
import { DeleteButton } from '@/Components/Button'

interface EditScreenTabButtonProps {
	screen: Schema.ScreensOptions
	onSuccess?: () => void
}

const EditScreenTabButton = ({ screen, onSuccess, ...props }: EditScreenTabButtonProps) => {

	const handleEditButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()

		modals.open({
			title: 'Edit Screen',
			children: (
				<>
					<ScreenForm
						to={ Routes.screen(screen.slug) }
						screen={ screen }
						method="patch"
						onSubmit={ () => modals.closeAll() }
					/>
					<Divider />
					<Accordion>
						<Accordion.Item value="delete">
							<Accordion.Control>Permanently Delete</Accordion.Control>
							<Accordion.Panel>
								<Text>Will permanently delete this screen and all controls on the screen</Text>
								<DeleteButton
									href={ Routes.screen(screen.slug) }
									onClick={ () => modals.closeAll() }
								>
									Delete
								</DeleteButton>
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				</>
			),
		})
	}

	return (
		<Box
			onMouseUp={ handleEditButtonClick }
			{ ...props }
		>
			<EditIcon size={ 11 } />
		</Box>
	)
}

export default EditScreenTabButton
