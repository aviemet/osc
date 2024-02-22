import React from 'react'
import SettingsLayout from '@/Layouts/AppLayout/SettingsLayout'
import { Group, Heading, Menu } from '@/Components'
import Empty from './Empty'
import SmtpList from './SmtpList'
import { Routes } from '@/lib'

interface IMailSettingsProps {
	smtps: Schema.Smtp[]
}

const Mail = ({ smtps }: IMailSettingsProps) => {
	return (
		<SettingsLayout>
			<Group position="apart">
				<Heading mb={ 24 }>Mail Settings</Heading>
				<Menu position="bottom-end">
					<Menu.Target />
					<Menu.Dropdown>
						<Menu.Link href={ Routes.newSettingsSmtp() }>New Mail Connection</Menu.Link>
					</Menu.Dropdown>
				</Menu>
			</Group>

			{ smtps.length === 0 ? <Empty /> : <SmtpList smtps={ smtps } /> }
		</SettingsLayout>
	)
}

export default Mail
