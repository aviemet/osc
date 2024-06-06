import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import ServersTable from '../Table'
import { type Pagination } from '@/types'

interface IServerIndexProps {
	servers: Schema.ServersIndex[]
	pagination: Pagination
}

const ServersIndex = ({ servers, pagination }: IServerIndexProps) => {
	return (
		<IndexPageTemplate
			title="Servers"
			model="servers"
			rows={ servers }
			pagination={ pagination }
			deleteRoute={ Routes.servers() }
			menuOptions={ [
				{ label: 'New Server', href: Routes.newServer(), icon: NewIcon },
			] }
		>
			<ServersTable />
		</IndexPageTemplate>
	)
}

export default ServersIndex
