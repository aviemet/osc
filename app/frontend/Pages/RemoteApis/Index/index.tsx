import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import RemoteApisTable from '../Table'

interface IRemoteApiIndexProps {
	remote_apis: Schema.RemoteApisIndex[]
	pagination: Pagination
}

const RemoteApisIndex = ({ remote_apis, pagination }: IRemoteApiIndexProps) => {
	return (
		<IndexPageTemplate
			title="RemoteApis"
			model="remote_apis"
			rows={ remote_apis }
			pagination={ pagination }
			deleteRoute={ Routes.remoteApis() }
			menuOptions={ [
				{ label: 'New Remote Api', href: Routes.newRemoteApi(), icon: NewIcon },
			] }
		>
			<RemoteApisTable />
		</IndexPageTemplate>
	)
}

export default RemoteApisIndex
