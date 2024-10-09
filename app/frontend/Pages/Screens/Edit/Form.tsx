import React from 'react'
import { Divider, Flex } from '@/Components'
import { Form, Submit } from '@/Components/Form'
import { EditControlsInterface } from '@/Features/Controls'
import { Routes } from '@/lib'

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
				<EditControlsInterface screen={ screen } />
			</Flex>

			<Divider my="md" />

			<Submit>Save Screen Layout</Submit>
		</Form>
	)
}

export default EditScreenForm
