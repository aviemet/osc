import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import RemoteEndpointsTable from '../Table'

interface IRemoteEndpointIndexProps {
	remote_endpoints: Schema.RemoteEndpointsIndex[]
	pagination: Pagination
}

const RemoteEndpointsIndex = ({ remote_endpoints, pagination }: IRemoteEndpointIndexProps) => {
	return (
		<IndexPageTemplate
			title="RemoteEndpoints"
			model="remote_endpoints"
			rows={ remote_endpoints }
			pagination={ pagination }
			deleteRoute={ Routes.remoteEndpoints() }
			menuOptions={ [
				{ label: 'New Remote Endpoint', href: Routes.newRemoteEndpoint(), icon: NewIcon },
			] }
		>
			<RemoteEndpointsTable />
		</IndexPageTemplate>
	)
}

export default RemoteEndpointsIndex
