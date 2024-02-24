import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ScreensForm from '../Form'

interface IEditScreenProps {
	screen: Schema.ScreensEdit
}

const EditScreen = ({ screen }: IEditScreenProps) => {
	const title = 'Edit Screen'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>
				
				<ScreensForm
					method='put'
					to={ Routes.screen() }
					screen={ screen }
				/>
			</Section>
		</Page>
	)
}

export default EditScreen
