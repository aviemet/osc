import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import PayloadsForm from '../Form'

interface IEditPayloadProps {
	payload: Schema.PayloadsEdit
}

const EditPayload = ({ payload }: IEditPayloadProps) => {
	const title = 'Edit Payload'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>
				
				<PayloadsForm
					method='put'
					to={ Routes.payload() }
					payload={ payload }
				/>
			</Section>
		</Page>
	)
}

export default EditPayload
