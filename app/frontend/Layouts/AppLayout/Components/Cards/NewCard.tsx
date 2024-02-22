import React from 'react'
import { Paper  } from '@/Components'
import { Link } from '@inertiajs/react'
import { Routes } from '@/lib'

interface NewCardProps {
	href: string
}

const NewCard = ({ href }: NewCardProps) => {
	return (
		<Paper
			shadow="sm"
			p="lg"
			my="md"
			radius="md"
			withBorder
			component={ Link }
			href={ Routes.newCircle() }
		>
			+ New
		</Paper>
	)
}

export default NewCard
