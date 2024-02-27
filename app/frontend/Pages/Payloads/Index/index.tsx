import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import PayloadsTable from '../Table'

interface IPayloadIndexProps {
	payloads: Schema.PayloadsIndex[]
	pagination: Schema.Pagination
}

const PayloadsIndex = ({ payloads, pagination }: IPayloadIndexProps) => {
	return (
		<IndexPageTemplate
			title="Payloads"
			model="payloads"
			rows={ payloads }
			pagination={ pagination }
			deleteRoute={ Routes.payloads() }
			menuOptions={ [
				{ label: 'New Payload', href: Routes.newPayload(), icon: NewIcon },
			] }
		>
			<PayloadsTable />
		</IndexPageTemplate>
	)
}

export default PayloadsIndex
