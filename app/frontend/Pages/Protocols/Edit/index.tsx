import React from 'react'
import { Title, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ProtocolsForm from '../Form'

interface IEditProtocolProps {
	protocol: Schema.ProtocolsEdit
}

const EditProtocol = ({ protocol }: IEditProtocolProps) => {
	const title = `Edit Protocol ${protocol?.title ? `: ${protocol.title}` : ''}`

	return (
		<Page title={ title }>
			<Section>
				<Title>{ title }</Title>

				<ProtocolsForm
					method='put'
					to={ Routes.protocol(protocol.slug) }
					protocol={ protocol }
				/>
			</Section>
		</Page>
	)
}

export default EditProtocol
