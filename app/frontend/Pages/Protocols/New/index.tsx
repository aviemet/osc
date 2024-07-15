import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ProtocolForm from '../Form'

interface INewProtocolProps {
	protocol: Schema.ProtocolsFormData
}

const NewProtocol = ({ ...data }: INewProtocolProps) => {
	const title = 'New Protocol'

	return (
		<Page title={ title }>

			<Section>
				<Title>{ title }</Title>

				<ProtocolForm
					to={ Routes.protocols() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewProtocol
