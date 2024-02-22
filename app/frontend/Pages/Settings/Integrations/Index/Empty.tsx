import React from 'react'
import { Link } from '@/Components'
import { Text } from '@mantine/core'
import { Routes } from '@/lib'
import { usePageProps } from '@/lib/hooks'

const Empty = () => {
	const { auth: { user } } = usePageProps()

	return (
		<Text>There are no SMTP servers set up for { user.active_company.name },
			<Link href={ Routes.newSettingsSmtp() } as="button" size="sm" p="xs">Add one now</Link>
		</Text>
	)
}

export default Empty
