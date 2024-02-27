import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import PayloadForm from '../Form'

interface INewPayloadProps {
	payload: Schema.PayloadsFormData
}

const NewPayload = ({ ...data }: INewPayloadProps) => {
	const title = 'New Payload'

	return (
		<Page title={ title }>

			<Section>
				<Heading>{ title }</Heading>

				<PayloadForm
					to={ Routes.payloads() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewPayload
