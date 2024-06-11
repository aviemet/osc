import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import CommandsTable from '../Table'
import { type Pagination } from '@/types'

interface ICommandIndexProps {
	commands: Schema.CommandsIndex[]
	pagination: Pagination
}

const CommandsIndex = ({ commands, pagination }: ICommandIndexProps) => {
	return (
		<IndexPageTemplate
			title="Commands"
			model="commands"
			rows={ commands }
			pagination={ pagination }
			deleteRoute={ Routes.commands() }
			menuOptions={ [
				{ label: 'New Command', href: Routes.newCommand(), icon: NewIcon },
			] }
		>
			<CommandsTable />
		</IndexPageTemplate>
	)
}

export default CommandsIndex
