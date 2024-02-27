import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ControlForm from '../Form'

interface INewControlProps {
	control: Schema.ControlsFormData
}

const NewControl = ({ ...data }: INewControlProps) => {
	const title = 'New Control'

	return (
		<Page title={ title }>

			<Section>
				<Heading>{ title }</Heading>

				<ControlForm
					to={ Routes.controls() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewControl
