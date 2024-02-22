import React from 'react'
import SettingsLayout from '@/Layouts/AppLayout/SettingsLayout'
import { Heading } from '@/Components'
import { Routes } from '@/lib'
import SmtpForm from '../Form'

interface ISmtpFormProps {
	smtp: Schema.Smtp
}

const EditMail = ({ smtp }: ISmtpFormProps) => {
	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Mail Settings</Heading>

			<SmtpForm
				method="put"
				data={ { smtp } }
				to={ Routes.settingsIntegrations(smtp.id!) }
			/>
		</SettingsLayout>
	)
}

export default EditMail
