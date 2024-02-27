import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ControlsTable from '../Table'

interface IControlIndexProps {
	controls: Schema.ControlsIndex[]
	pagination: Schema.Pagination
}

const ControlsIndex = ({ controls, pagination }: IControlIndexProps) => {
	return (
		<IndexPageTemplate
			title="Controls"
			model="controls"
			rows={ controls }
			pagination={ pagination }
			deleteRoute={ Routes.controls() }
			menuOptions={ [
				{ label: 'New Control', href: Routes.newControl(), icon: NewIcon },
			] }
		>
			<ControlsTable />
		</IndexPageTemplate>
	)
}

export default ControlsIndex
