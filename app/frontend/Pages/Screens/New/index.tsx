import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import NewScreenForm from './Form'

interface INewScreenProps {
	screen: Schema.ScreensFormData
}

const NewScreen = ({ ...data }: INewScreenProps) => {
	const title = 'New Screen'

	return (
		<Page title={ title }>

			<Section>
				<Title>{ title }</Title>

				<NewScreenForm
					to={ Routes.screens() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewScreen
