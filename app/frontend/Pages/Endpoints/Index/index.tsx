import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import EndpointsTable from '../Table'

interface IEndpointIndexProps {
	endpoints: Schema.EndpointsIndex[]
	pagination: Schema.Pagination
}

const EndpointsIndex = ({ endpoints, pagination }: IEndpointIndexProps) => {
	return (
		<IndexPageTemplate
			title="Endpoints"
			model="endpoints"
			rows={ endpoints }
			pagination={ pagination }
			deleteRoute={ Routes.endpoints() }
			menuOptions={ [
				{ label: 'New Endpoint', href: Routes.newEndpoint(), icon: NewIcon },
			] }
		>
			<EndpointsTable />
		</IndexPageTemplate>
	)
}

export default EndpointsIndex
