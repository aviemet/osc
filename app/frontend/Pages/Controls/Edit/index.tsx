import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ControlsForm from '../Form'

interface IEditControlProps {
	control: Schema.ControlsEdit
}

const EditControl = ({ control }: IEditControlProps) => {
	const title = 'Edit Control'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>

				<ControlsForm
					method='put'
					to={ Routes.control() }
					control={ control }
				/>
			</Section>
		</Page>
	)
}

export default EditControl
