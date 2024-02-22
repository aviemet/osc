import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import UsersTable from '../Table'

interface IUserIndexProps {
	users: Schema.UsersIndex[]
	pagination: Schema.Pagination
}

const UserIndex = ({ users, pagination }: IUserIndexProps) => {
	return (
		<IndexPageTemplate
			title="Users"
			model="users"
			rows={ users }
			pagination={ pagination }
			deleteRoute={ Routes.users() }
			menuOptions={ [
				{ label: 'Invite New User', href: Routes.newUser(), icon: NewIcon },
			] }
		>
			<UsersTable />
		</IndexPageTemplate>
	)
}

export default UserIndex
