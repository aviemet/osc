import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ProtocolsTable from '../Table'

interface IProtocolIndexProps {
	protocols: Schema.ProtocolsIndex[]
	pagination: Schema.Pagination
}

const ProtocolsIndex = ({ protocols, pagination }: IProtocolIndexProps) => {
	return (
		<IndexPageTemplate
			title="Protocols"
			model="protocols"
			rows={ protocols }
			pagination={ pagination }
			deleteRoute={ Routes.protocols() }
			menuOptions={ [
				{ label: 'New Protocol', href: Routes.newProtocol(), icon: NewIcon },
			] }
		>
			<ProtocolsTable />
		</IndexPageTemplate>
	)
}

export default ProtocolsIndex
