import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ScreenForm from '../Form'

interface INewScreenProps {
	screen: Schema.ScreensFormData
}

const NewScreen = ({ ...data }: INewScreenProps) => {
	const title = 'New Screen'

	return (
		<Page title={ title }>

			<Section>
				<Heading>{ title }</Heading>

				<ScreenForm
					to={ Routes.screens() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewScreen
