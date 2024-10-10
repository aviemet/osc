import React from 'react'
import { Routes } from '@/lib'
import { Divider, Flex } from '@/Components'
import { Form, Submit } from '@/Components/Form'
import DndEditControlsInterface from './DndEditControlsInterface'

interface EditScreenFormProps {
	screen: Schema.ScreensEdit
}

const EditScreenForm = ({ screen }: EditScreenFormProps) => {
	return (
		<Form
			model="screen"
			data={ { screen: screen } }
			to={ Routes.screen(screen.slug) }
			method="patch"
			filter={ ['screen.id', 'screen.slug', 'screen.created_at', 'screen.updated_at'] }
			remember={ false }
		>

			<Flex gap="md">
				<DndEditControlsInterface screen={ screen } />
			</Flex>

			<Divider my="md" />

			<Submit>Save Screen Layout</Submit>
		</Form>
	)
}

export default EditScreenForm
